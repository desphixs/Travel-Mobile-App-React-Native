import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable';

import { HeroImage } from '../assets'

const HomeScreen = () => {
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
    return (
        <SafeAreaView className="bg-white flex-1 relative">
            {/* First Section */}
            <View className="flex-row px-6 mt-8 items-center space-x-2">
                <Animatable.View
                    animation={"wobble"}
                    easing="ease-in-out"
                    className="w-16 h-16 bg-black rounded-full items-center justify-center"
                >
                    <Text className="text-3xl font-semibold text-[#00bcc9]">Go</Text>
                </Animatable.View>
                <Text className="text-3xl font-semibold text-[#2a2b4b]">Travel</Text>
            </View>

            {/* Second section */}
            <View className="px-6 mt-8 space-y-2">
                <Text className="text-[32px] text-[#3c6072]">Enjoy the trip with</Text>
                <Text className="text-[28px] text-[#00bcc9] font-bold">Good Moments</Text>
                <Text className="text-[#3c6072] text-base">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </Text>
            </View>

            {/* Third Section */}
            <View className="w-[300px] h-[300px] bg-[#00bcc9] rounded-full absolute bottom-36 -right-36"  ></View>
            <View className="w-[300px] h-[300px] bg-[#e99265] rounded-full absolute -bottom-28 -left-36"  ></View>

            {/* image container */}
            <View className="flex-1 relative items-center justify-center">
                <Animatable.Image
                    animation="fadeIn"
                    easing="ease-in-out"
                    source={HeroImage}
                    className="w-full h-full mt-20 object-cover"
                />

                <TouchableOpacity className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00bcc9] rounded-full items-center justify-center">
                    <Animatable.View
                        animation={"swing"}
                        easing="ease-in-out"
                        iterationCount={"infinite"}
                        className="w-20 h-20 items-center justify-center rounded-full bg-[#00bcc9]"
                    >
                        <Text className="text-gray-50 text-[36px] font-semi-bold">Go</Text>
                    </Animatable.View>
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    )
}

export default HomeScreen