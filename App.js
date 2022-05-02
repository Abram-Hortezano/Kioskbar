import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions, SafeAreaView} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function App() {
  return (
    <SafeAreaView style={styles.firstView}>
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
      {/*SECTION*/}
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
            </SafeAreaView>

            <SafeAreaView style={styles.image}>
              <Image
                style={styles.logo}
                source={{
                  uri: 'https://www.hersheyland.com/content/dam/hersheyland/en-us/blogs/blog-images/peanut-butter-drip-cake.jpg',
                }}
              />
            </SafeAreaView>

            <SafeAreaView style={styles.image}>
              <Image
                style={styles.logo}
                source={{
                  uri: 'https://www.thespruceeats.com/thmb/vUa84bcy7sXFZczahCuWQC9h8PY=/2667x2000/smart/filters:no_upscale()/AngelFoodCakeHERO-35c72869f62443638bd2b033d6d381bd.jpg',
                }}
              />
            </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  firstView: {
    flex:0.6,
    padding: 25,
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
    height: 170,
    width: 200,
    backgroundColor: "#000",
    padding: 10,
  },
  logo: {
    height: 150,
    width: 180,
    borderRadius: 25,
  },

});
