"use client"

import { useState } from "react"
import { supabase } from "../lib/supabaseClient"

export default function ImageUpload() {

  const [uploading, setUploading] = useState(false)

  async function uploadImage(event) {

    const file = event.target.files[0]
    const fileName = Date.now() + "-" + file.name

    setUploading(true)

    const { data, error } = await supabase.storage
      .from("images")
      .upload(fileName, file)

    setUploading(false)

    if (error) {
      console.log(error)
      return
    }

    const { data: urlData } = supabase.storage
      .from("images")
      .getPublicUrl(fileName)

    console.log("Image URL:", urlData.publicUrl)

  }

  return (
    <input type="file" onChange={uploadImage} />
  )
}