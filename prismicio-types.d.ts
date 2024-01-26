// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
  /**
   * Email field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.email
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email: prismic.KeyTextField;

  /**
   * Phone field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.phone
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  phone: prismic.KeyTextField;
}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FooterDocumentData>,
    'footer',
    Lang
  >;

type GalleryDocumentDataSlicesSlice = GallerySlice;

/**
 * Content for Gallery documents
 */
interface GalleryDocumentData {
  /**
   * Title field in *Gallery*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Slice Zone field in *Gallery*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<GalleryDocumentDataSlicesSlice>;
}

/**
 * Gallery document from Prismic
 *
 * - **API ID**: `gallery`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type GalleryDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<GalleryDocumentData>,
    'gallery',
    Lang
  >;

/**
 * Item in *Header → Navigation*
 */
export interface HeaderDocumentDataNavigationItem {
  /**
   * Link field in *Header → Navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header.navigation[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *Header → Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.navigation[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Content for Header documents
 */
interface HeaderDocumentData {
  /**
   * Title field in *Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Navigation field in *Header*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: header.navigation[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigation: prismic.GroupField<Simplify<HeaderDocumentDataNavigationItem>>;
}

/**
 * Header document from Prismic
 *
 * - **API ID**: `header`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HeaderDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HeaderDocumentData>,
    'header',
    Lang
  >;

type MapDocumentDataSlicesSlice = never;

/**
 * Content for Map documents
 */
interface MapDocumentData {
  /**
   * Map field in *Map*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: map.map
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  map: prismic.KeyTextField;

  /**
   * Description field in *Map*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: map.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Slice Zone field in *Map*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: map.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<MapDocumentDataSlicesSlice> /**
   * Meta Description field in *Map*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: map.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Map*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: map.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Map*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: map.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Map document from Prismic
 *
 * - **API ID**: `map`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MapDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<MapDocumentData>, 'map', Lang>;

type PageDocumentDataSlicesSlice = never;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Gallery field in *Page*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: page.gallery
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  gallery: prismic.ContentRelationshipField<'gallery'>;

  /**
   * Description field in *Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Teaser field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.teaser
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  teaser: prismic.KeyTextField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, 'page', Lang>;

type PlacesDocumentDataSlicesSlice = PlacesSlice;

/**
 * Content for Places documents
 */
interface PlacesDocumentData {
  /**
   * Gallery field in *Places*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: places.gallery
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  gallery: prismic.ContentRelationshipField<'gallery'>;

  /**
   * Description field in *Places*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: places.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Slice Zone field in *Places*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: places.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PlacesDocumentDataSlicesSlice> /**
   * Meta Description field in *Places*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: places.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Places*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: places.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Places*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: places.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Places document from Prismic
 *
 * - **API ID**: `places`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PlacesDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<PlacesDocumentData>,
    'places',
    Lang
  >;

export type AllDocumentTypes =
  | FooterDocument
  | GalleryDocument
  | HeaderDocument
  | MapDocument
  | PageDocument
  | PlacesDocument;

/**
 * Primary content in *Gallery → Primary*
 */
export interface GallerySliceDefaultPrimary {
  /**
   * Photo field in *Gallery → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.primary.photo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  photo: prismic.ImageField<never>;

  /**
   * Description field in *Gallery → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Priority field in *Gallery → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: gallery.primary.priority
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  priority: prismic.BooleanField;
}

/**
 * Default variation for Gallery Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GallerySliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<GallerySliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Gallery → Primary*
 */
export interface GallerySliceVideoPrimary {
  /**
   * Video field in *Gallery → Primary*
   *
   * - **Field Type**: Embed
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.primary.video
   * - **Documentation**: https://prismic.io/docs/field#embed
   */
  video: prismic.EmbedField;

  /**
   * Description field in *Gallery → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * Video variation for Gallery Slice
 *
 * - **API ID**: `video`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GallerySliceVideo = prismic.SharedSliceVariation<
  'video',
  Simplify<GallerySliceVideoPrimary>,
  never
>;

/**
 * Primary content in *Gallery → Primary*
 */
export interface GallerySliceVerticalPrimary {
  /**
   * Photo1 field in *Gallery → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.primary.photo1
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  photo1: prismic.ImageField<never>;

  /**
   * Description1 field in *Gallery → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.primary.description1
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description1: prismic.KeyTextField;

  /**
   * Photo2 field in *Gallery → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.primary.photo2
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  photo2: prismic.ImageField<never>;

  /**
   * Description2 field in *Gallery → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.primary.description2
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description2: prismic.KeyTextField;
}

/**
 * Vertical variation for Gallery Slice
 *
 * - **API ID**: `vertical`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GallerySliceVertical = prismic.SharedSliceVariation<
  'vertical',
  Simplify<GallerySliceVerticalPrimary>,
  never
>;

/**
 * Primary content in *Gallery → Primary*
 */
export interface GallerySliceVerticalVideoPrimary {
  /**
   * Photo field in *Gallery → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.primary.photo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  photo: prismic.ImageField<never>;

  /**
   * Description1 field in *Gallery → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.primary.description1
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description1: prismic.KeyTextField;

  /**
   * Video field in *Gallery → Primary*
   *
   * - **Field Type**: Embed
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.primary.video
   * - **Documentation**: https://prismic.io/docs/field#embed
   */
  video: prismic.EmbedField;

  /**
   * Description2 field in *Gallery → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.primary.description2
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description2: prismic.KeyTextField;

  /**
   * Left video field in *Gallery → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: gallery.primary.left_video
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  left_video: prismic.BooleanField;
}

/**
 * Vertical video variation for Gallery Slice
 *
 * - **API ID**: `verticalVideo`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GallerySliceVerticalVideo = prismic.SharedSliceVariation<
  'verticalVideo',
  Simplify<GallerySliceVerticalVideoPrimary>,
  never
>;

/**
 * Slice variation for *Gallery*
 */
type GallerySliceVariation =
  | GallerySliceDefault
  | GallerySliceVideo
  | GallerySliceVertical
  | GallerySliceVerticalVideo;

/**
 * Gallery Shared Slice
 *
 * - **API ID**: `gallery`
 * - **Description**: Gallery
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GallerySlice = prismic.SharedSlice<
  'gallery',
  GallerySliceVariation
>;

/**
 * Primary content in *Places → Primary*
 */
export interface PlacesSliceDefaultPrimary {
  /**
   * Title field in *Places → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: places.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Text field in *Places → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: places.primary.text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;

  /**
   * Category field in *Places → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: Category
   * - **API ID Path**: places.primary.category
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  category: prismic.SelectField<
    'Plaża' | 'Zwiedzanie' | 'Jedzenie' | 'Atrakcje' | 'Dla dzieci' | 'Inne'
  >;
}

/**
 * Default variation for Places Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PlacesSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<PlacesSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Places*
 */
type PlacesSliceVariation = PlacesSliceDefault;

/**
 * Places Shared Slice
 *
 * - **API ID**: `places`
 * - **Description**: Places
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PlacesSlice = prismic.SharedSlice<'places', PlacesSliceVariation>;

declare module '@prismicio/client' {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      FooterDocument,
      FooterDocumentData,
      GalleryDocument,
      GalleryDocumentData,
      GalleryDocumentDataSlicesSlice,
      HeaderDocument,
      HeaderDocumentData,
      HeaderDocumentDataNavigationItem,
      MapDocument,
      MapDocumentData,
      MapDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      PlacesDocument,
      PlacesDocumentData,
      PlacesDocumentDataSlicesSlice,
      AllDocumentTypes,
      GallerySlice,
      GallerySliceDefaultPrimary,
      GallerySliceVideoPrimary,
      GallerySliceVerticalPrimary,
      GallerySliceVerticalVideoPrimary,
      GallerySliceVariation,
      GallerySliceDefault,
      GallerySliceVideo,
      GallerySliceVertical,
      GallerySliceVerticalVideo,
      PlacesSlice,
      PlacesSliceDefaultPrimary,
      PlacesSliceVariation,
      PlacesSliceDefault,
    };
  }
}
