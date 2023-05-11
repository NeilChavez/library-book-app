export interface BookSearchResult {
  kind: string
  totalItems: number
  items?: ItemsEntity[] | null
}
export interface ItemsEntity {
  kind: string
  id: string
  etag: string
  selfLink: string
  volumeInfo: VolumeInfo
  saleInfo: SaleInfo
  accessInfo: AccessInfo
  searchInfo?: SearchInfo | null
}
export interface VolumeInfo {
  title: string
  subtitle?: string | null
  authors?: string[] | null
  publisher?: string | null
  publishedDate: string
  description?: string | null
  industryIdentifiers?: IndustryIdentifiersEntity[] | null
  readingModes: ReadingModes
  pageCount: number
  printType: string
  categories?: string[] | null
  maturityRating: string
  allowAnonLogging: boolean
  contentVersion: string
  panelizationSummary?: PanelizationSummary | null
  imageLinks?: ImageLinks | null
  language: string
  previewLink: string
  infoLink: string
  canonicalVolumeLink: string
}
export interface IndustryIdentifiersEntity {
  type: string
  identifier: string
}
export interface ReadingModes {
  text: boolean
  image: boolean
}
export interface PanelizationSummary {
  containsEpubBubbles: boolean
  containsImageBubbles: boolean
}
export interface ImageLinks {
  smallThumbnail: string
  thumbnail: string
}
export interface SaleInfo {
  country: string
  saleability: string
  isEbook: boolean
  listPrice?: ListPriceOrRetailPrice | null
  retailPrice?: ListPriceOrRetailPrice1 | null
  buyLink?: string | null
  offers?: OffersEntity[] | null
}
export interface ListPriceOrRetailPrice {
  amount: number
  currencyCode: string
}
export interface ListPriceOrRetailPrice1 {
  amount: number
  currencyCode: string
}
export interface OffersEntity {
  finskyOfferType: number
  listPrice: ListPriceOrRetailPrice2
  retailPrice: ListPriceOrRetailPrice2
  giftable: boolean
}
export interface ListPriceOrRetailPrice2 {
  amountInMicros: number
  currencyCode: string
}
export interface AccessInfo {
  country: string
  viewability: string
  embeddable: boolean
  publicDomain: boolean
  textToSpeechPermission: string
  epub: EpubOrPdf
  pdf: Pdf
  webReaderLink: string
  accessViewStatus: string
  quoteSharingAllowed: boolean
}
export interface EpubOrPdf {
  isAvailable: boolean
  downloadLink?: string | null
}
export interface Pdf {
  isAvailable: boolean
  downloadLink?: string | null
  acsTokenLink?: string | null
}
export interface SearchInfo {
  textSnippet: string
}

export interface FavoriteContextValue {
  favorites: ItemsEntity[]
  setFavorites: React.Dispatch<SetStateAction<ItemsEntity[]>>
}

// export interface Books {
//   numFound: number
//   start: number
//   numFoundExact: boolean
//   docs?: DocEntity[] | null
//   num_found: number
//   q: string
//   offset?: null
// }
// export interface DocEntity {
//   key: string
//   type: string
//   seed?: string[] | null
//   title: string
//   title_suggest: string
//   title_sort: string
//   edition_count: number
//   edition_key?: string[] | null
//   publish_date?: string[] | null
//   publish_year?: number[] | null
//   first_publish_year?: number | null
//   number_of_pages_median?: number | null
//   lccn?: string[] | null
//   publish_place?: string[] | null
//   oclc?: string[] | null
//   contributor?: string[] | null
//   lcc?: string[] | null
//   ddc?: string[] | null
//   isbn?: string[] | null
//   last_modified_i: number
//   ebook_count_i: number
//   ebook_access: string
//   has_fulltext: boolean
//   public_scan_b: boolean
//   ia?: string[] | null
//   ia_collection?: string[] | null
//   ia_collection_s?: string | null
//   lending_edition_s?: string | null
//   lending_identifier_s?: string | null
//   printdisabled_s?: string | null
//   ratings_average?: number | null
//   ratings_sortable?: number | null
//   ratings_count?: number | null
//   ratings_count_1?: number | null
//   ratings_count_2?: number | null
//   ratings_count_3?: number | null
//   ratings_count_4?: number | null
//   ratings_count_5?: number | null
//   readinglog_count?: number | null
//   want_to_read_count?: number | null
//   currently_reading_count?: number | null
//   already_read_count?: number | null
//   cover_edition_key?: string | null
//   cover_i?: number | null
//   publisher?: string[] | null
//   language?: string[] | null
//   author_key?: string[] | null
//   author_name?: string[] | null
//   author_alternative_name?: string[] | null
//   person?: string[] | null
//   place?: string[] | null
//   subject?: string[] | null
//   time?: string[] | null
//   id_alibris_id?: string[] | null
//   id_amazon?: string[] | null
//   id_canadian_national_library_archive?: string[] | null
//   id_depósito_legal?: string[] | null
//   id_goodreads?: string[] | null
//   id_google?: string[] | null
//   id_librarything?: string[] | null
//   id_overdrive?: string[] | null
//   id_paperback_swap?: string[] | null
//   id_wikidata?: string[] | null
//   ia_loaded_id?: string[] | null
//   ia_box_id?: string[] | null
//   publisher_facet?: string[] | null
//   person_key?: string[] | null
//   place_key?: string[] | null
//   time_facet?: string[] | null
//   person_facet?: string[] | null
//   subject_facet?: string[] | null
//   _version_: number
//   place_facet?: string[] | null
//   lcc_sort?: string | null
//   author_facet?: string[] | null
//   subject_key?: string[] | null
//   ddc_sort?: string | null
//   time_key?: string[] | null
//   first_sentence?: string[] | null
//   id_amazon_ca_asin?: string[] | null
//   id_amazon_co_uk_asin?: string[] | null
//   id_amazon_de_asin?: string[] | null
//   id_amazon_it_asin?: string[] | null
//   id_bcid?: string[] | null
//   id_british_national_bibliography?: string[] | null
//   id_nla?: string[] | null
//   id_bibliothèque_nationale_de_france?: string[] | null
//   id_british_library?: string[] | null
//   id_hathi_trust?: string[] | null
//   id_scribd?: string[] | null
//   id_better_world_books?: string[] | null
//   subtitle?: string | null
//   id_libris?: string[] | null
// }
