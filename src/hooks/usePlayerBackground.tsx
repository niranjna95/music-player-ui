import { colors } from '@/constants/tokens'
import React, { useEffect, useState } from 'react'
import { getColors } from 'react-native-image-colors'
import { AndroidImageColors } from 'react-native-image-colors/build/types'
const usePlayerBackground = (imageUrl: string) => {
  
    const [imageColors, setImageColors] = useState<AndroidImageColors | null>(null)

      useEffect(() =>{

        getColors(imageUrl,{
            fallback:colors.background,
            cache:true,
            key:imageUrl
        }).then((colors) => setImageColors(colors as AndroidImageColors))

      },[imageUrl])


  return {imageColors}
}

export default usePlayerBackground
