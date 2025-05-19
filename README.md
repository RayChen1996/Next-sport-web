## 運動揪團網

設計稿 [連結](https://www.figma.com/file/UXOUGpNshhMmhqCcG8OSjI/%E9%81%8B%E5%8B%95%E6%8F%AA%E5%9C%98%E7%B6%B2%E7%AB%99?type=design&node-id=0%3A1&mode=design&t=dqlCGUesGUpYMSIK-1)

瀏覽連結 [連結](https://next-sport-web.vercel.app/)

```sql
{
  "members": [
    {
      "id": 1,
      "name": "Alice",
      "email": "alice@example.com"
    },
    {
      "id": 2,
      "name": "Bob",
      "email": "bob@example.com"
    }
  ],
  "groups": [
    {
      "id": 1,
      "title": "登山揪團",
      "description": "一起去爬合歡山！",
      "hostId": 1
    },
    {
      "id": 2,
      "title": "烘焙活動",
      "description": "週末一起學做甜點～",
      "hostId": 2
    }
  ],
  "groupMembers": [
    {
      "id": 1,
      "groupId": 1,
      "memberId": 1,
      "role": "host"
    },
    {
      "id": 2,
      "groupId": 1,
      "memberId": 2,
      "role": "participant"
    },
    {
      "id": 3,
      "groupId": 2,
      "memberId": 2,
      "role": "host"
    }
  ]
}

```

📘 結構說明
members：會員基本資料。

groups：揪團活動資料，其中 hostId 可直接關聯到發起人（members 表）。

groupMembers：中介表，描述哪位會員參加了哪個活動，並記錄其角色（如 host 或 participant）。
