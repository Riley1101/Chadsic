export interface StrapiResponse<T> {
  [key: string]: {
    data: T[];
  };
}

export type SongAPIResponse = StrapiResponse<Song>;

export interface Song {
  id: string;
  attributes: SongAttributes;
}

export interface SongAttributes {
  title: string;
  description: string;
  cover: StrapiAsset;
}

export interface StrapiAsset {
  data: {
    id: string;
    attributes: StrapiAssetAttributes;
  };
}

export interface StrapiAssetAttributes {
  id: number;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number | null;
  height: number | null;
  formats: any[] | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
}
