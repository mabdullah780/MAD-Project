import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, onPress, ScrollView} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

const ChangemobScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
        <View style={styles.Header}> 
            <TouchableOpacity>
                <Icon name="arrow-left" size={20} color="black" onPress={() => navigation.navigate('Profile')} />
                </TouchableOpacity >
                <Text style={styles.cart}>PROFILE</Text>
            </View>
            <Text style={styles.info}>Add Phone</Text>
            <View style={styles.formContainer}>
                <Text style={styles.label}>Phone No</Text>
                <TextInput
                style={styles.input}
                placeholder="Phone No"
                keyboardType="Number"
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('More')}>
            <Text style={styles.buttonText}>UPDATE PHONE</Text>
            </TouchableOpacity>
            
            </View>
            
            <View style={styles.footer}>
            <TouchableOpacity style={styles.footerText} onPress={() => navigation.navigate('Home')}>
                <Icon name="home" size={20} color="black"/>
                </TouchableOpacity >
                <TouchableOpacity style={styles.footerText} onPress={() => navigation.navigate('Wishlist')}>
                <Icon name="heart" size={20} color="black"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerText} onPress={() => navigation.navigate('Cart')}>
                <Icon name="shopping-cart" size={20} color="black"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerText} onPress={() => navigation.navigate('More')}>
                <Icon name="user" size={20} color="black"/>
                </TouchableOpacity>
              </View>
      
      </View>
        );
    };
    
    const styles = StyleSheet.create({
        container: {
            width: 390,
            height: 844,
            backgroundColor: '#F1F1F1',
            flex:1,
          },
        Header: {
            width: 390,
            height: 74,
            borderRadius: 15,
            flexDirection: 'row',
            backgroundColor: 'F1F1F1',
            justifyContent: 'center',
            alignItems: 'center',
        },
        cart: {
            fontSize: 16,
            fontWeight: '600',
            marginHorizontal: 130,
            letterSpacing: 2,
            // fontFamily: 'Lato_900Black',
        },
        info:{
            marginTop: 30,
            textAlign: 'center',
            letterSpacing: 2,
            fontSize: 20,
            fontWeight: '600',
            // fontFamily: 'Lato_900Black',
        },
    formContainer: {
      width: '100%',
      paddingTop: 40,
      marginHorizontal: 40,
    },
    label: {
      fontWeight: '600',
      fontSize: 14,
      marginBottom: 4,
      fontWeight: 'bold',
    },
    input: {
      borderRadius: 15,
      backgroundColor: 'white',
      width: 300,
      height: 40,
      padding: 10,
      marginBottom: 16,
    },
    button: {
        backgroundColor: '#ED203E',
        borderRadius: 25,
        width: 200,
        alignItems: 'center',
        padding: 10,
        marginBottom: 16,
        marginTop: 10,
        height: 50,
        justifyContent: 'center',
        marginLeft: 62,
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 2,
        fontSize: 16,
        textAlign: 'center',

      },
      footer: {
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#fff",
        height: 60,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 25,
        // borderTopWidth: 1,
        // borderTopColor: '#e2e2e2',
      },
      footerIcon: {
        width: 25,
        height: 25,
      },
      activeIcon: {
        tintColor: "#000",
      },
      inactiveIcon: {
        tintColor: "#b4b4b4",
      },

});
  
export default ChangemobScreen;