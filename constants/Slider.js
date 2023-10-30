
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import SliderComponent from './components/SliderComponent';
import ButtonWithImage from './components/ButtonWithİmage';
const Slider = () => {
    const [page, setPage] = useState(1);
   const handleNextPage = () => {
          if (page < 4) {
              setPage(page + 1);
          }
      };

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    return (
        <View style={{height:280}}>
            {page === 1 && (
                <SliderComponent
                    image={require('../assets/images/exam.png')}
                    text="Sınav becerilerinizi geliştirin."
                    backgroundColor="yellow"
                />
            )}
            {page === 2 && (
                <SliderComponent
                    image={require('../assets/images/success.png')}
                    text="Sınav başarınıza bir adım daha yaklaşın."
                    backgroundColor="yellow"
                />
            )}
            {page === 3 && (
                <SliderComponent
                    image={require('../assets/images/homework.png')}
                    text="Sınav hazırlığınızı daha eğlenceli ve etkili hale getirir."
                    backgroundColor="yellow"
                />
            )}
            {page === 4 && (
                <SliderComponent
                    image={require('../assets/images/fi.png')}
                    text="Sınav gününe bir adım daha yaklaşmanızı sağlar."
                    backgroundColor="yellow"
                />
            )}
            <View style={{display:"flex",flexDirection:"row"}}>
                <ButtonWithImage
                 
                    onPress={handlePrevPage}
                    disabled={page === 1}
                    imageSource={require('../assets/images/arrow.png')}
                />
                <ButtonWithImage
                   
                    onPress={handleNextPage}
                    disabled={page === 4}
                    imageSource={require('../assets/images/right-arrow.png')}
                />
            </View>
           
        </View>
  )
}

export default Slider