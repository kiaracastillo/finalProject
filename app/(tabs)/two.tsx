import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { IconButton, Button, Searchbar, Divider, FAB  } from "react-native-paper";
import { Link } from 'expo-router';


export default function TabTwoScreen() {
  
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    
    <ScrollView style={styles.container}>



<View style={styles.topBannerView}>
        <Image style={styles.topLogo} source={require("../../assets/images/logohome2.png")} />
      </View>



      <View>
      <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery} 
      style={styles.searchBar}
    />

      </View>

      < View style={styles.listProView}> 
      <IconButton
icon="filter-menu-outline"
iconColor={'#ba6e8f'}
size={25}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end',}} />
          <Text style={styles.listPro}> Cookies</Text>
         
    
      </View>

      <View style={styles.grid}> 

      <View style={styles.product}>

<IconButton
icon="cards-heart-outline"
iconColor={'#ba6e8f'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', top:10,}} />

<Image style={styles.imgProduct} source={require("../../assets/images/cookie1.png")}  />

<Text style={{right: 36, color: "#5D3C64", fontWeight: "bold", fontSize: 15}}>Crinkie</Text>

<Text style={{ right: 43, color: "#898989", fontWeight: "light", fontSize: 10}}>Cookies</Text>

<View style={styles.bottomProduct}>
<Text style={{ right: 15, color: "#ba6e8f", fontWeight: "bold"}}>$1.99</Text>
<IconButton
icon="plus-circle-outline"
iconColor={'#5D3C64'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', left: 32}} />

</View>




</View>

<View style={styles.product}>

<IconButton
icon="cards-heart-outline"
iconColor={'#ba6e8f'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', top:10,}} />

<Image style={styles.imgProduct} source={require("../../assets/images/cookie2.png")}  />

<Text style={{right: 39, color: "#5D3C64", fontWeight: "bold", fontSize: 15}}>Choco</Text>

<Text style={{ right: 42, color: "#898989", fontWeight: "light", fontSize: 10}}>Cookies</Text>

<View style={styles.bottomProduct}>
<Text style={{ right: 15, color: "#ba6e8f", fontWeight: "bold"}}>$2.99</Text>
<IconButton
icon="plus-circle-outline"
iconColor={'#5D3C64'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', left: 32}} />

</View>




</View>

<View style={styles.product}>

<IconButton
icon="cards-heart-outline"
iconColor={'#ba6e8f'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', top:10,}} />

<Image style={styles.imgProduct} source={require("../../assets/images/cookie4.png")}  />

<Text style={{right: 39, color: "#5D3C64", fontWeight: "bold", fontSize: 15}}>Rains</Text>

<Text style={{ right: 40, color: "#898989", fontWeight: "light", fontSize: 10}}>Cookies</Text>

<View style={styles.bottomProduct}>
<Text style={{ right: 15, color: "#ba6e8f", fontWeight: "bold"}}>$2.20</Text>
<IconButton
icon="plus-circle-outline"
iconColor={'#5D3C64'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', left: 32}} />

</View>




          </View>


          <View style={styles.product}>

<IconButton
icon="cards-heart-outline"
iconColor={'#ba6e8f'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', top:10,}} />

<Image style={styles.imgProduct} source={require("../../assets/images/cookie5.png")}  />

<Text style={{right: 41, color: "#5D3C64", fontWeight: "bold", fontSize: 15}}>M&M</Text>

<Text style={{ right: 44, color: "#898989", fontWeight: "light", fontSize: 10}}>Cookie</Text>

<View style={styles.bottomProduct}>
<Text style={{ right: 15, color: "#ba6e8f", fontWeight: "bold"}}>$3.99</Text>
<IconButton
icon="plus-circle-outline"
iconColor={'#5D3C64'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', left: 32}} />

</View>




</View>

<View style={styles.product}>

          <IconButton
    icon="cards-heart-outline"
    iconColor={'#ba6e8f'}
    size={23}
    onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', top:10,}} />

<Image style={styles.imgProduct} source={require("../../assets/images/cookie12.png")}  />

    <Text style={{right: 34, color: "#5D3C64", fontWeight: "bold", fontSize: 15}}>Crèmeo</Text>

    <Text style={{ right: 45, color: "#898989", fontWeight: "light", fontSize: 10}}>Cookie</Text>

    <View style={styles.bottomProduct}>
      <Text style={{ right: 15, color: "#ba6e8f", fontWeight: "bold"}}>$4.45</Text>
      <IconButton
    icon="plus-circle-outline"
    iconColor={'#5D3C64'}
    size={23}
    onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', left: 32}} />

    </View>




          </View>

          <View style={styles.product}>

<IconButton
icon="cards-heart-outline"
iconColor={'#ba6e8f'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', top:10,}} />

<Image style={styles.imgProduct} source={require("../../assets/images/cookie13.png")}  />

<Text style={{right: 45, color: "#5D3C64", fontWeight: "bold", fontSize: 15}}>Devil</Text>

<Text style={{ right: 45, color: "#898989", fontWeight: "light", fontSize: 10}}>Cookie</Text>

<View style={styles.bottomProduct}>
<Text style={{ right: 15, color: "#ba6e8f", fontWeight: "bold"}}>$3.45</Text>
<IconButton
icon="plus-circle-outline"
iconColor={'#5D3C64'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', left: 32}} />

</View>




</View>

<View style={styles.product}>

<IconButton
icon="cards-heart-outline"
iconColor={'#ba6e8f'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', top:10,}} />

<Image style={styles.imgProduct} source={require("../../assets/images/cookie10.png")}  />

<Text style={{right: 39, color: "#5D3C64", fontWeight: "bold", fontSize: 15}}>Pinky</Text>

    <Text style={{ right: 43, color: "#898989", fontWeight: "light", fontSize: 10}}>Cookie</Text>

<View style={styles.bottomProduct}>
<Text style={{ right: 15, color: "#ba6e8f", fontWeight: "bold"}}>$4.45</Text>
<IconButton
icon="plus-circle-outline"
iconColor={'#5D3C64'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', left: 32}} />

</View>




</View>

<View style={styles.product}>

<IconButton
icon="cards-heart-outline"
iconColor={'#ba6e8f'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', top:10,}} />

<Image style={styles.imgProduct} source={require("../../assets/images/cookie11.png")}  />

<Text style={{right: 28, color: "#5D3C64", fontWeight: "bold", fontSize: 15}}>Creamlet</Text>

<Text style={{ right: 43, color: "#898989", fontWeight: "light", fontSize: 10}}>Cookie</Text>

<View style={styles.bottomProduct}>
<Text style={{ right: 15, color: "#ba6e8f", fontWeight: "bold"}}>$5.15</Text>
<IconButton
icon="plus-circle-outline"
iconColor={'#5D3C64'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', left: 32}} />

</View>




</View>

<View style={styles.product}>

<IconButton
icon="cards-heart-outline"
iconColor={'#ba6e8f'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', top:10,}} />

<Image style={styles.imgProduct} source={require("../../assets/images/cookie3.png")}  />

<Text style={{right: 35, color: "#5D3C64", fontWeight: "bold", fontSize: 15}}>Peanut</Text>

<Text style={{ right: 42, color: "#898989", fontWeight: "light", fontSize: 10}}>Cookies</Text>

<View style={styles.bottomProduct}>
<Text style={{ right: 15, color: "#ba6e8f", fontWeight: "bold"}}>$2.45</Text>
<IconButton
icon="plus-circle-outline"
iconColor={'#5D3C64'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', left: 32}} />

</View>




</View>

<View style={styles.product}>

          <IconButton
    icon="cards-heart-outline"
    iconColor={'#ba6e8f'}
    size={23}
    onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', top:10,}} />

<Image style={styles.imgProduct} source={require("../../assets/images/xmas1.png")}  />

    <Text style={{right: 40, color: "#5D3C64", fontWeight: "bold", fontSize: 15}}>Heart</Text>

    <Text style={{ right: 42, color: "#898989", fontWeight: "light", fontSize: 10}}>Cookies</Text>

    <View style={styles.bottomProduct}>
      <Text style={{ right: 15, color: "#ba6e8f", fontWeight: "bold"}}>$1.45</Text>
      <IconButton
    icon="plus-circle-outline"
    iconColor={'#5D3C64'}
    size={23}
    onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', left: 32}} />

    </View>




          </View>

          <View style={styles.product}>

          <IconButton
    icon="cards-heart-outline"
    iconColor={'#ba6e8f'}
    size={23}
    onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', top:10,}} />

<Image style={styles.imgProduct} source={require("../../assets/images/xmas2.png")}  />

    <Text style={{right: 40, color: "#5D3C64", fontWeight: "bold", fontSize: 15}}>Copo</Text>

    <Text style={{ right: 40, color: "#898989", fontWeight: "light", fontSize: 10}}>Cookies</Text>

    <View style={styles.bottomProduct}>
      <Text style={{ right: 15, color: "#ba6e8f", fontWeight: "bold"}}>$1.99</Text>
      <IconButton
    icon="plus-circle-outline"
    iconColor={'#5D3C64'}
    size={23}
    onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', left: 32}} />

    </View>




          </View>

          <View style={styles.product}>

<IconButton
icon="cards-heart-outline"
iconColor={'#ba6e8f'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', top:10,}} />

<Image style={styles.imgProduct} source={require("../../assets/images/xmas3.png")}  />

<Text style={{right: 26, color: "#5D3C64", fontWeight: "bold", fontSize: 15}}>Snowman</Text>

<Text style={{ right: 41, color: "#898989", fontWeight: "light", fontSize: 10}}>Cookies</Text>

<View style={styles.bottomProduct}>
<Text style={{ right: 15, color: "#ba6e8f", fontWeight: "bold"}}>$2.50</Text>
<IconButton
icon="plus-circle-outline"
iconColor={'#5D3C64'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', left: 32}} />

</View>




</View>

<View style={styles.product}>

<IconButton
icon="cards-heart-outline"
iconColor={'#ba6e8f'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', top:10,}} />

<Image style={styles.imgProduct} source={require("../../assets/images/xmas4.png")}  />

<Text style={{right: 45, color: "#5D3C64", fontWeight: "bold", fontSize: 15}}>Star</Text>

<Text style={{ right: 40, color: "#898989", fontWeight: "light", fontSize: 10}}>Cookies</Text>

<View style={styles.bottomProduct}>
<Text style={{ right: 15, color: "#ba6e8f", fontWeight: "bold"}}>$2.20</Text>
<IconButton
icon="plus-circle-outline"
iconColor={'#5D3C64'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', left: 32}} />

</View>




</View>

<View style={styles.product}>

<IconButton
icon="cards-heart-outline"
iconColor={'#ba6e8f'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', top:10,}} />

<Image style={styles.imgProduct} source={require("../../assets/images/xmas5.png")}  />

<Text style={{right: 40, color: "#5D3C64", fontWeight: "bold", fontSize: 15}}>6 pack</Text>

<Text style={{ right: 45, color: "#898989", fontWeight: "light", fontSize: 10}}>Cookies</Text>

<View style={styles.bottomProduct}>
<Text style={{ right: 15, color: "#ba6e8f", fontWeight: "bold"}}>$12.45</Text>
<IconButton
icon="plus-circle-outline"
iconColor={'#5D3C64'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', left: 32}} />

</View>




</View>









      </View>

      <Divider />

      < View style={styles.listProView}> 
          <Text style={styles.listPro}> Brownies</Text>
        
    
      </View>


      <View style={styles.grid}>

      <View style={styles.product}>

<IconButton
icon="cards-heart-outline"
iconColor={'#ba6e8f'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', top:10,}} />

<Image style={styles.imgProduct} source={require("../../assets/images/brownie2.png")}  />

<Text style={{right: 30, color: "#5D3C64", fontWeight: "bold", fontSize: 15}}>Fudgeify</Text>

<Text style={{ right: 40, color: "#898989", fontWeight: "light", fontSize: 10}}>Brownies</Text>

<View style={styles.bottomProduct}>
<Text style={{ right: 15, color: "#ba6e8f", fontWeight: "bold"}}>$3.50</Text>
<IconButton
icon="plus-circle-outline"
iconColor={'#5D3C64'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', left: 32}} />

</View>




</View>

<View style={styles.product}>

<IconButton
icon="cards-heart-outline"
iconColor={'#ba6e8f'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', top:10,}} />

<Image style={styles.imgProduct} source={require("../../assets/images/brownie1.png")}  />

<Text style={{right: 15, color: "#5D3C64", fontWeight: "bold", fontSize: 15}}>SweetSquare</Text>

<Text style={{ right: 40, color: "#898989", fontWeight: "light", fontSize: 10}}>Brownies</Text>

<View style={styles.bottomProduct}>
<Text style={{ right: 15, color: "#ba6e8f", fontWeight: "bold"}}>$3.99</Text>
<IconButton
icon="plus-circle-outline"
iconColor={'#5D3C64'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', left: 32}} />

</View>




</View>

<View style={styles.product}>

<IconButton
icon="cards-heart-outline"
iconColor={'#ba6e8f'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', top:10,}} />

<Image style={styles.imgProduct} source={require("../../assets/images/brownie4.png")}  />

<Text style={{right: 23, color: "#5D3C64", fontWeight: "bold", fontSize: 15}}>LuxeFudge</Text>

<Text style={{ right: 40, color: "#898989", fontWeight: "light", fontSize: 10}}>Brownies</Text>

<View style={styles.bottomProduct}>
<Text style={{ right: 15, color: "#ba6e8f", fontWeight: "bold"}}>$4.99</Text>
<IconButton
icon="plus-circle-outline"
iconColor={'#5D3C64'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', left: 32}} />

</View>




</View>


      </View>

      <Divider />

      < View style={styles.listProView}> 
          <Text style={styles.listPro}> Ice Cream</Text>
        
    
      </View>

      <View style={styles.grid}>

      <View style={styles.product}>

<IconButton
icon="cards-heart-outline"
iconColor={'#ba6e8f'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', top:10,}} />

<Image style={styles.imgProduct} source={require("../../assets/images/ice3.png")}  />

<Text style={{right: 7, color: "#5D3C64", fontWeight: "bold", fontSize: 15}}>Gum Ice Cream</Text>

<Text style={{ right: 35, color: "#898989", fontWeight: "light", fontSize: 10}}>Ice Cream</Text>

<View style={styles.bottomProduct}>
<Text style={{ right: 15, color: "#ba6e8f", fontWeight: "bold"}}>$2.95</Text>
<IconButton
icon="plus-circle-outline"
iconColor={'#5D3C64'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', left: 32}} />

</View>




</View>

<View style={styles.product}>

<IconButton
icon="cards-heart-outline"
iconColor={'#ba6e8f'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', top:10,}} />

<Image style={styles.imgProduct} source={require("../../assets/images/ice4.png")}  />

<Text style={{right: 30, color: "#5D3C64", fontWeight: "bold", fontSize: 15}}>Pistachio</Text>

<Text style={{ right: 40, color: "#898989", fontWeight: "light", fontSize: 10}}>Ice Cream</Text>

<View style={styles.bottomProduct}>
<Text style={{ right: 15, color: "#ba6e8f", fontWeight: "bold"}}>$10.45</Text>
<IconButton
icon="plus-circle-outline"
iconColor={'#5D3C64'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', left: 32}} />

</View>




</View>

<View style={styles.product}>

<IconButton
icon="cards-heart-outline"
iconColor={'#ba6e8f'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', top:10,}} />

<Image style={styles.imgProduct} source={require("../../assets/images/ice8.png")}  />

<Text style={{right: 34, color: "#5D3C64", fontWeight: "bold", fontSize: 15,}}>Snuggle</Text>

<Text style={{ right: 40, color: "#898989", fontWeight: "light", fontSize: 10}}>Ice Cream</Text>

<View style={styles.bottomProduct}>
<Text style={{ right: 15, color: "#ba6e8f", fontWeight: "bold"}}>$10.45</Text>
<IconButton
icon="plus-circle-outline"
iconColor={'#5D3C64'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', left: 32}} />

</View>




</View>

<View style={styles.product}>

          <IconButton
    icon="cards-heart-outline"
    iconColor={'#ba6e8f'}
    size={23}
    onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', top:10,}} />

<Image style={styles.imgProduct} source={require("../../assets/images/brownie4.png")}  />

    <Text style={{right: 32, color: "#5D3C64", fontWeight: "bold", fontSize: 15}}>Iciesnap</Text>

    <Text style={{ right: 37, color: "#898989", fontWeight: "light", fontSize: 10}}>Ice Cream</Text>

    <View style={styles.bottomProduct}>
      <Text style={{ right: 15, color: "#ba6e8f", fontWeight: "bold"}}>$3.70</Text>
      <IconButton
    icon="plus-circle-outline"
    iconColor={'#5D3C64'}
    size={23}
    onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', left: 32}} />

    </View>




          </View>

          <View style={styles.product}>

<IconButton
icon="cards-heart-outline"
iconColor={'#ba6e8f'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', top:10,}} />

<Image style={styles.imgProduct} source={require("../../assets/images/ice5.png")}  />

<Text style={{right: 45, color: "#5D3C64", fontWeight: "bold", fontSize: 15}}>Berry</Text>

<Text style={{ right: 40, color: "#898989", fontWeight: "light", fontSize: 10}}>Ice Cream</Text>

<View style={styles.bottomProduct}>
<Text style={{ right: 15, color: "#ba6e8f", fontWeight: "bold"}}>$10.45</Text>
<IconButton
icon="plus-circle-outline"
iconColor={'#5D3C64'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', left: 32}} />

</View>




          </View>     


          <View style={styles.product}>

<IconButton
icon="cards-heart-outline"
iconColor={'#ba6e8f'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', top:10,}} />

<Image style={styles.imgProduct} source={require("../../assets/images/ice6.png")}  />

<Text style={{right: 45, color: "#5D3C64", fontWeight: "bold", fontSize: 15}}>Red</Text>

<Text style={{ right: 35, color: "#898989", fontWeight: "light", fontSize: 10}}>Ice Cream</Text>

<View style={styles.bottomProduct}>
<Text style={{ right: 15, color: "#ba6e8f", fontWeight: "bold"}}>$9.45</Text>
<IconButton
icon="plus-circle-outline"
iconColor={'#5D3C64'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', left: 32}} />

</View>




          </View>

          <View style={styles.product}>

<IconButton
icon="cards-heart-outline"
iconColor={'#ba6e8f'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', top:10,}} />

<Image style={styles.imgProduct} source={require("../../assets/images/ice7.png")}  />

<Text style={{right: 45, color: "#5D3C64", fontWeight: "bold", fontSize: 15}}>Mix</Text>

<Text style={{ right: 35, color: "#898989", fontWeight: "light", fontSize: 10}}>Ice Cream</Text>

<View style={styles.bottomProduct}>
<Text style={{ right: 15, color: "#ba6e8f", fontWeight: "bold"}}>$7.45</Text>
<IconButton
icon="plus-circle-outline"
iconColor={'#5D3C64'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', left: 32}} />

</View>




          </View>

      </View>


      <Divider />

      < View style={styles.listProView}> 
          <Text style={styles.listPro}> Cookiewich</Text>
        
    
      </View>


      <View style={styles.grid}>

        <View style={styles.product}>

<IconButton
icon="cards-heart-outline"
iconColor={'#ba6e8f'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', top:10,}} />

<Image style={styles.imgProduct} source={require("../../assets/images/ice1.png")}  />

<Text style={{right: 30, color: "#5D3C64", fontWeight: "bold", fontSize: 15}}>Frozbee</Text>

<Text style={{ right: 33, color: "#898989", fontWeight: "light", fontSize: 10}}>Cookiewich</Text>

<View style={styles.bottomProduct}>
<Text style={{ right: 15, color: "#ba6e8f", fontWeight: "bold"}}>$4.50</Text>
<IconButton
icon="plus-circle-outline"
iconColor={'#5D3C64'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', left: 32}} />

</View>




</View>


<View style={styles.product}>

<IconButton
icon="cards-heart-outline"
iconColor={'#ba6e8f'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', top:10,}} />

<Image style={styles.imgProduct} source={require("../../assets/images/ice2.png")}  />

<Text style={{right: 45, color: "#5D3C64", fontWeight: "bold", fontSize: 15}}>Deli</Text>

<Text style={{ right: 33, color: "#898989", fontWeight: "light", fontSize: 10}}>Cookiewich</Text>

<View style={styles.bottomProduct}>
<Text style={{ right: 15, color: "#ba6e8f", fontWeight: "bold"}}>$4.50</Text>
<IconButton
icon="plus-circle-outline"
iconColor={'#5D3C64'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', left: 32}} />

</View>




</View>

      </View>

      <Divider />

      < View style={styles.listProView}> 
          <Text style={styles.listPro}> Drink</Text>
        
    
      </View>

      <View style={styles.grid}>

      <View style={styles.product}>

<IconButton
icon="cards-heart-outline"
iconColor={'#ba6e8f'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', top:10,}} />

<Image style={styles.imgProduct} source={require("../../assets/images/drink4.png")}  />

<Text style={{right: 16, color: "#5D3C64", fontWeight: "bold", fontSize: 15}}>Whole Milk</Text>

<Text style={{ right: 45, color: "#898989", fontWeight: "light", fontSize: 10}}>Drink</Text>

<View style={styles.bottomProduct}>
<Text style={{ right: 15, color: "#ba6e8f", fontWeight: "bold"}}>$1.99</Text>
<IconButton
icon="plus-circle-outline"
iconColor={'#5D3C64'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', left: 32}} />

</View>




</View>

<View style={styles.product}>

<IconButton
icon="cards-heart-outline"
iconColor={'#ba6e8f'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', top:10,}} />

<Image style={styles.imgProduct} source={require("../../assets/images/drink2.png")}  />

<Text style={{right: 40, color: "#5D3C64", fontWeight: "bold", fontSize: 15}}>Coke</Text>

<Text style={{ right: 45, color: "#898989", fontWeight: "light", fontSize: 10}}>Drink</Text>

<View style={styles.bottomProduct}>
<Text style={{ right: 15, color: "#ba6e8f", fontWeight: "bold"}}>$1.50</Text>
<IconButton
icon="plus-circle-outline"
iconColor={'#5D3C64'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', left: 32}} />

</View>




          </View>

          <View style={styles.product}>

<IconButton
icon="cards-heart-outline"
iconColor={'#ba6e8f'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', top:10,}} />

<Image style={styles.imgProduct} source={require("../../assets/images/drink1.png")}  />

<Text style={{right: 32, color: "#5D3C64", fontWeight: "bold", fontSize: 15}}>Chomilk</Text>

<Text style={{ right: 47, color: "#898989", fontWeight: "light", fontSize: 10}}>Drink</Text>

<View style={styles.bottomProduct}>
<Text style={{ right: 15, color: "#ba6e8f", fontWeight: "bold"}}>$3.29</Text>
<IconButton
icon="plus-circle-outline"
iconColor={'#5D3C64'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', left: 32}} />

</View>




</View>

<View style={styles.product}>

<IconButton
icon="cards-heart-outline"
iconColor={'#ba6e8f'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', top:10,}} />

<Image style={styles.imgProduct} source={require("../../assets/images/drink3.png")}  />

<Text style={{right: 32, color: "#5D3C64", fontWeight: "bold", fontSize: 15}}>Water</Text>

<Text style={{ right: 47, color: "#898989", fontWeight: "light", fontSize: 10}}>Drink</Text>

<View style={styles.bottomProduct}>
<Text style={{ right: 15, color: "#ba6e8f", fontWeight: "bold"}}>$0.99</Text>
<IconButton
icon="plus-circle-outline"
iconColor={'#5D3C64'}
size={23}
onPress={() => console.log('Pressed')} style={{ alignSelf: 'flex-end', left: 32}} />

</View>




</View>



      </View>


      < View style={{marginBottom: 50,}}>
      </View>

    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fafafa",
  },
  topBannerView: {
    width: 430,
    height: 70,
    backgroundColor: "#fff",
    left: -30,
    top: -20,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  topLogo: {
    width: 100,
    height: 100,
  
  },
  searchBar: {
    backgroundColor: '#fff',
    borderColor: '#5D3C64',
    borderWidth: 1,
    marginTop: 20,
    
    
  },
  grid: {
   
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginBottom: 30,
    marginTop: -20,
    
  },
  product: {
    width: 150,
    height: 210,
    backgroundColor: "#fff",
    marginRight: 22,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 20,
    elevation: 3,

  },

  imgProduct: {
    width: 100,
    height: 100,
    top:-15,
  },
  bottomProduct: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'space-between',
    alignItems: 'center',
    top: -10
  },
  listProView: {
    marginTop: 20,
    marginBottom: 20,
   },
   listPro: {
     color: "#5D3C64",
     fontWeight: "bold",
     fontSize: 20,
     
     
 
   },
   fab: {
    top: -15,
    position: 'absolute',
    right: 1,
    backgroundColor: "#fff", // Optional: Change background color
    
  },
  
});
