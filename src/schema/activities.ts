export interface activities {
  id: string;
  title: string;
  description: string;
  image_url: string;
  category_id: string;
  host_id: string;
  is_private: boolean;
  location_name: string;
  location_address: string;
  latitude: number;
  longitude: number;
  start_time: string; // ISO 8601 format
  end_time: string | null; // ISO 8601 format or null
  created_at: string; // ISO 8601 format
  status: string;
  max_participants: number;
  current_participants: number;
}
