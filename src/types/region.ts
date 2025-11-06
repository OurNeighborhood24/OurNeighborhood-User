export interface Region {
  region_id: number;
  region_code: number;
  region_name: string;
}

export type RegionsResponse = Region[];
