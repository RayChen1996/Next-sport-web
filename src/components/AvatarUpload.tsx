// components/AvatarUpload.tsx
"use client"; // For Next.js 13+ App Router, marks this as a client component

import React, { useState } from "react";
import { supabase } from "@/utils/supabase"; // 根據您的路徑調整
import { User } from "@supabase/supabase-js"; // 引入 Supabase User 類型

interface AvatarUploadProps {
  user: User | null; // 當前登入用戶
  currentAvatarUrl: string | null; // 當前頭像 URL
  onUploadSuccess: (newUrl: string) => void; // 上傳成功回調
}

export default function AvatarUpload({
  user,
  currentAvatarUrl,
  onUploadSuccess,
}: AvatarUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setError(null); // 重置錯誤訊息
    if (!user) {
      setError("請先登入才能上傳頭像。");
      return;
    }

    const file = event.target.files?.[0];
    if (!file) {
      setError("請選擇一個檔案。");
      return;
    }

    if (!file.type.startsWith("image/")) {
      setError("請上傳圖片檔案。");
      return;
    }

    setUploading(true);

    try {
      // 檔案名稱範例：user_id/avatar_timestamp.png
      const fileExt = file.name.split(".").pop();
      const filePath = `${user.id}/${Date.now()}.${fileExt}`;
      const bucketName = "avatars"; // 您的 Supabase Storage bucket 名稱

      const { data, error: uploadError } = await supabase.storage
        .from(bucketName)
        .upload(filePath, file, {
          cacheControl: "3600", // 緩存 1 小時
          upsert: true, // 如果存在同名檔案，則覆蓋
        });

      if (uploadError) {
        throw uploadError;
      }

      // 獲取公共 URL
      const { data: publicUrlData } = supabase.storage
        .from(bucketName)
        .getPublicUrl(filePath);

      if (publicUrlData?.publicUrl) {
        const newAvatarUrl = publicUrlData.publicUrl;

        // 更新用戶資料庫中的 avatar_url
        const { error: updateError } = await supabase
          .from("users")
          .update({ avatar_url: newAvatarUrl })
          .eq("id", user.id); // 僅更新當前登入用戶的資料

        if (updateError) {
          throw updateError;
        }

        onUploadSuccess(newAvatarUrl); // 通知父組件上傳成功
      } else {
        throw new Error("無法獲取圖片的公共 URL");
      }
    } catch (err: any) {
      console.error("上傳或更新頭像失敗:", err.message);
      setError(`上傳失敗: ${err.message}`);
    } finally {
      setUploading(false);
      // 清空檔案輸入，以便用戶可以再次選擇相同的檔案 (如果需要)
      event.target.value = "";
    }
  };

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">頭像上傳</h2>
      {currentAvatarUrl ? (
        <img
          src={currentAvatarUrl}
          alt="用戶頭像"
          className="mb-4 h-24 w-24 rounded-full border-2 border-gray-300 object-cover"
        />
      ) : (
        <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gray-200 text-gray-500">
          無頭像
        </div>
      )}

      <label
        htmlFor="avatar-input"
        className="block w-full cursor-pointer rounded-md bg-blue-500 px-4 py-2 text-center text-white transition duration-300 hover:bg-blue-600"
      >
        {uploading ? "上傳中..." : "選擇圖片"}
        <input
          id="avatar-input"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          disabled={uploading}
          className="hidden"
        />
      </label>
      {error && <p className="mt-2 text-red-500">{error}</p>}
    </div>
  );
}
