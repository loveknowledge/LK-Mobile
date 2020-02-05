import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export function Post() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            'https://truthout.org/wp-content/uploads/2019/09/GettyImages-1169915846-1200x773.jpg',
        }}
        style={styles.articleImage}
      />
      <Text style={styles.title}>
        Big Banks Are Shifting Mortgages Made Riskier by Climate Change Onto
        Taxpayers
      </Text>
      <Image
        source={{
          uri:
            'https://therealnews.com/wp-content/uploads/2019/09/FLD092219_hoffman_war.jpg',
        }}
        style={styles.articleImage}
      />
      <Text style={styles.title}>
        The Democratic Party Remains a Party of War, Not Peace
      </Text>
      <Image
        source={{
          uri:
            'https://www.democracynow.org/images/story/22/49422/full_hd/SEG3-Egypt-Protests-1.jpg',
        }}
        style={styles.articleImage}
      />
      <Text style={styles.title}>
        Over 2,000 Arrested in Egypt in Growing Protests Against Sisi, Trump's
        "Favorite Dictator"
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderBottomColor: '#dadada',
    borderBottomWidth: 1,
  },
  articleImage: {
    width: 350,
    height: 225,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: 0,
  },
  title: {
    padding: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
