// app/profile/page.tsx
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import AvatarUpload from "@/components/AvatarUpload"; // 調整路徑

export const dynamic = "force-dynamic"; // 確保每次請求都動態渲染

export default async function ProfilePage() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();
  let userProfile = null;
  if (user) {
    const { data, error } = await supabase
      .from("users")
      .select("avatar_url, username") // 選擇您需要的用戶資訊
      .eq("id", user.id)
      .single();

    if (error) {
      console.error("Error fetching user profile:", error.message);
    } else {
      userProfile = data;
    }
  }

  // 處理上傳成功後的邏輯，例如更新 UI
  const handleUploadSuccess = (newUrl: string) => {
    // 這裡可以選擇刷新頁面，或更新 Zustand/Redux store 等
    // 為了簡單，我們直接刷新頁面或使用 useState 來更新 currentAvatarUrl
    console.log("Avatar updated to:", newUrl);
    // 由於是 Server Component，直接刷新頁面最簡單
    // 但在實際應用中，通常會搭配 Client Component 的 State 管理來實現無刷新更新
    // 如果您在 Client Component 中，可以直接 set state
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="mb-6 text-3xl font-bold">我的個人檔案</h1>
      {user ? (
        <div className="rounded-lg bg-white p-6 shadow-md">
          <p className="mb-4 text-lg">**用戶 ID:** {user.id}</p>
          <p className="mb-4 text-lg">**用戶 Email:** {user.email}</p>
          <p className="mb-4 text-lg">
            **用戶名:** {userProfile?.username || "未設定"}
          </p>

          <AvatarUpload
            user={user}
            currentAvatarUrl={userProfile?.avatar_url || null}
            onUploadSuccess={handleUploadSuccess}
          />
        </div>
      ) : (
        <p className="text-red-500">請先登入以查看您的個人檔案。</p>
      )}
    </div>
  );
}
