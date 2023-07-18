export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          available: boolean
          created_at: string
          description: string
          id: string
          images: Json | null
          name: string
          unit_amount: number
        }
        Insert: {
          available?: boolean
          created_at?: string
          description?: string
          id: string
          images?: Json | null
          name?: string
          unit_amount: number
        }
        Update: {
          available?: boolean
          created_at?: string
          description?: string
          id?: string
          images?: Json | null
          name?: string
          unit_amount?: number
        }
        Relationships: []
      }
      purchases: {
        Row: {
          created_at: string | null
          id: string
          product: string | null
          status: Database["public"]["Enums"]["purchase_status_enum"] | null
          units: number | null
          user: string | null
        }
        Insert: {
          created_at?: string | null
          id: string
          product?: string | null
          status?: Database["public"]["Enums"]["purchase_status_enum"] | null
          units?: number | null
          user?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          product?: string | null
          status?: Database["public"]["Enums"]["purchase_status_enum"] | null
          units?: number | null
          user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "purchases_product_fkey"
            columns: ["product"]
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "purchases_user_fkey"
            columns: ["user"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      reviews: {
        Row: {
          created_at: string | null
          id: string
          product: string | null
          rating: number
          review: string
          user: string | null
        }
        Insert: {
          created_at?: string | null
          id: string
          product?: string | null
          rating: number
          review: string
          user?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          product?: string | null
          rating?: number
          review?: string
          user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reviews_product_fkey"
            columns: ["product"]
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_user_fkey"
            columns: ["user"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          created_at: string
          email: string | null
          id: string
          name: string | null
          phoneNumber: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          id: string
          name?: string | null
          phoneNumber: string
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: string
          name?: string | null
          phoneNumber?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      install_available_extensions_and_test: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
    }
    Enums: {
      purchase_status_enum: "opened" | "closed" | "cancelled"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
