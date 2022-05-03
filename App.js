import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions, SafeAreaView} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function App() {
  return (
    <SafeAreaView style={styles.firstView}>
      <ScrollView>
        <SafeAreaView style={styles.categories}>
          <Text style={styles.category}>
            Categories
          </Text>
        </SafeAreaView>
        {/*SECTION HEAD*/}
        <View style={styles.sectionHead}>
        <Text style={styles.sectionNameHead}>Select from Menu</Text>
        <Text style={[styles.sectionNameFilter,{borderWidth: 1, borderColor: '#fff'}]}><AntDesign name="bars" size={15} color="#fff" />Filters</Text>
        </View>
        {/*SECTION 1*/}
          <Text>Popular</Text>
          <View style={styles.section}>
          <Text style={styles.sectionName}>Cakes</Text>
          <Text style={styles.seeAll}>See All</Text>
          </View>
          <ScrollView horizontal={true}>
                <SafeAreaView style={styles.image}>
                  <Image
                    style={styles.logo}
                    source={{
                      uri: 'https://preppykitchen.com/wp-content/uploads/2019/06/Chocolate-cake-recipe-1200a.jpg',
                    }}
                  />
                  <Text style={styles.productName}>Chocolate Cake</Text>
                </SafeAreaView>

                <SafeAreaView style={styles.image}>
                  <Image
                    style={styles.logo}
                    source={{
                      uri: 'https://www.hersheyland.com/content/dam/hersheyland/en-us/blogs/blog-images/peanut-butter-drip-cake.jpg',
                    }}
                  />
                  <Text style={styles.productName}>Hershey Cake</Text>
                </SafeAreaView>

                <SafeAreaView style={styles.image}>
                  <Image
                    style={styles.logo}
                    source={{
                      uri: 'https://www.thespruceeats.com/thmb/vUa84bcy7sXFZczahCuWQC9h8PY=/2667x2000/smart/filters:no_upscale()/AngelFoodCakeHERO-35c72869f62443638bd2b033d6d381bd.jpg',
                    }}
                  />
                  <Text style={styles.productName}>Mixed-berries Cake</Text>
                </SafeAreaView>
          </ScrollView>
            <View
            style={{
            borderBottomColor: 'white',
            borderBottomWidth: 1,
            marginTop: 20,
            marginBottom: 20,
            }}
            />
        {/* SECTION 2 */}
          <Text>Popular</Text>
          <View style={styles.section}>
          <Text style={styles.sectionName}>Foods</Text>
          <Text style={styles.seeAll}>See All</Text>
          </View>
          <ScrollView horizontal={true}>
                <SafeAreaView style={styles.image}>
                  <Image
                    style={styles.logo}
                    source={{
                      uri: 'https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2017/08/shutterstock_516831739-by-bonchan-1.jpg',
                    }}
                  />
                  <Text style={styles.productName}>Sisig</Text>
                </SafeAreaView>

                <SafeAreaView style={styles.image}>
                  <Image
                    style={styles.logo}
                    source={{
                      uri: 'https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2017/10/2356318582_ec4d62c670_b.jpg',
                    }}
                  />
                  <Text style={styles.productName}>Tokwa't Baboy</Text>
                </SafeAreaView>

                <SafeAreaView style={styles.image}>
                  <Image
                    style={styles.logo}
                    source={{
                      uri: 'https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2017/10/lechon_kawali.jpg',
                    }}
                  />
                  <Text style={styles.productName}>Lechon Kawali</Text>
                </SafeAreaView>
          </ScrollView>
          <View
            style={{
            borderBottomColor: 'white',
            borderBottomWidth: 1,
            marginTop: 20,
            marginBottom: 20,
            }}
            />
        {/* SECTION 3 */}
          <Text>Popular</Text>
          <View style={styles.section}>
          <Text style={styles.sectionName}>Beverages</Text>
          <Text style={styles.seeAll}>See All</Text>
          </View>
          <ScrollView horizontal={true}>
                <SafeAreaView style={styles.image}>
                  <Image
                    style={styles.logo}
                    source={{
                      uri: 'https://www.windowseat.ph/wp-content/uploads/2016/08/564657_563523160348670_708953233_n.jpg',
                    }}
                  />
                  <Text style={styles.productName}>Mojito De Mayon</Text>
                </SafeAreaView>

                <SafeAreaView style={styles.image}>
                  <Image
                    style={styles.logo}
                    source={{
                      uri: 'https://drinkmanila.com/wp-content/uploads/2016/12/Ma-Cherie-Calvados-Midori-Pineapple-and-calamansi-juice-Panutsa-syrup.jpg',
                    }}
                  />
                  <Text style={styles.productName}>Panutsa Old Fashioned</Text>
                </SafeAreaView>

                <SafeAreaView style={styles.image}>
                  <Image
                    style={styles.logo}
                    source={{
                      uri: 'https://drinkmanila.com/wp-content/uploads/2016/07/center-Classy-Gin-Pom-2.jpg',
                    }}
                  />
                  <Text style={styles.productName}>Gin Pom Pi</Text>
                </SafeAreaView>

                <SafeAreaView style={styles.image}>
                  <Image
                    style={styles.logo}
                    source={{
                      uri: 'https://mydominicankitchen.com/wp-content/uploads/2021/07/Mango-Mojito-My-Dominican-Kitchen-6.jpg',
                    }}
                  />
                  <Text style={styles.productName}>Mango Mojito</Text>
                </SafeAreaView>

                <SafeAreaView style={styles.image}>
                  <Image
                    style={styles.logo}
                    source={{
                      uri: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F140708122734-5-manila-cocktails.jpg',
                    }}
                  />
                  <Text style={styles.productName}>Halo-Halo</Text>
                </SafeAreaView>
          </ScrollView>
          <View
            style={{
            borderBottomColor: 'white',
            borderBottomWidth: 1,
            marginTop: 20,
            marginBottom: 20,
            }}
            />  
        {/* SECTION 4 */}      
          <Text>Popular</Text>
          <View style={styles.section}>
          <Text style={styles.sectionName}>Pulutan - 'Pares'</Text>
          <Text style={styles.seeAll}>See All</Text>
          </View>
          <ScrollView horizontal={true}>
                <SafeAreaView style={styles.image}>
                  <Image
                    style={styles.logo}
                    source={{
                      uri: 'https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2017/10/1024px-khaep_mu.jpg',
                    }}
                  />
                  <Text style={styles.productName}>Chicharon</Text>
                </SafeAreaView>

                <SafeAreaView style={styles.image}>
                  <Image
                    style={styles.logo}
                    source={{
                      uri: 'https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2017/10/11617979673_5be2ed95d3_k.jpg',
                    }}
                  />
                  <Text style={styles.productName}>Pork BBQ</Text>
                </SafeAreaView>

                <SafeAreaView style={styles.image}>
                  <Image
                    style={styles.logo}
                    source={{
                      uri: 'https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2017/10/14081560215_473087a11b_k.jpg',
                    }}
                  />
                  <Text style={styles.productName}>Chicharon Bulaklak</Text>
                </SafeAreaView>

                <SafeAreaView style={styles.image}>
                  <Image
                    style={styles.logo}
                    source={{
                      uri: 'https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2017/10/14081560215_473087a11b_k.jpg',
                    }}
                  />
                  <Text style={styles.productName}>Kropeks</Text>
                </SafeAreaView>

                <SafeAreaView style={styles.image}>
                  <Image
                    style={styles.logo}
                    source={{
                      uri: 'https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2017/10/4551496185_4ca89974b1_b.jpg',
                    }}
                  />
                  <Text style={styles.productName}>Kinilaw</Text>
                </SafeAreaView>
          </ScrollView>
          <View
            style={{
            borderBottomColor: 'white',
            borderBottomWidth: 1,
            marginTop: 20,
            marginBottom: 20,
            }}
            />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  firstView: {
    flex:1,
    backgroundColor: '#979797',
  },
  categories: {
    margin: 40,
  },
  category: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  /* SECTION HEAD */
  sectionHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 50,
    marginLeft: 20,
    marginRight: 20,
  },
  sectionNameHead: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: 'center',
  },
  sectionNameFilter: {
    width: 120,
    fontSize: 15,
    color: "#fff",
    padding:10,
    textAlign: 'center',
    borderRadius: 25,
    backgroundColor: "#000",
  },
  /* SECTION DESIGNS */
  section: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  sectionName: {
    fontSize: 15,
    fontWeight: "bold",
  },
  seeAll: {
    textDecorationLine: "underline",
  },
  /* ITEMS IN MENU */
  image: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: 200,
    width: 200,
    backgroundColor: "#000",
    padding: 10,
  },
  productName: {
    color: "#fff",
    fontSize: 15,
  },
  logo: {
    height: 150,
    width: 180,
    borderRadius: 25,
  },

});
