import { Card, Layout, Text, Button } from '@ui-kitten/components'
import React, { useCallback } from 'react'
import { View, Pressable, StyleSheet, Linking } from 'react-native'

const ExploreSection = props => {
  const ArticleSection = props => {

    const url = 'https://www.instagram.com/p/CBIUa8aFv3I/'

    const articles = [
      {
        id: 1,
        title: '20-min HIIT Workout',
        subtitle: '20 minutes of movement',
        url: 'https://www.instagram.com/p/CEA0nmKAJRW/'
      },
      {
        id: 2,
        title: 'Helpful Exercise Tips!',
        subtitle: 'Make fitness a sustainable habit',
        url: 'https://www.instagram.com/p/CZOG6Y7tHrG/'
      },
      {
        id: 3,
        title: 'Beginner Upper Body Workout',
        subtitle: 'Feel the burn in your bicep and tricep muscles',
        url: 'https://www.instagram.com/p/CDq57_mgTR2/'
      },
      {
        id: 4,
        title: 'Plant-based Proteins',
        subtitle:
          'Get to know your protein sources you can incorporate in your diet!',
        url: 'https://www.instagram.com/p/CH_3wRSAT75/'
      },
      {
        id: 5,
        title: 'Why do you exercise?',
        subtitle: 'Keep the weight off forever, not lose it really fast',
        url: 'https://www.instagram.com/p/CH_3wRSAT75/'
      },
      {
        id: 6,
        title: '20-min Circuit Workout',
        subtitle: 'Challenging but doable with a little push and discipline',
        url: 'https://www.instagram.com/p/CEA0nmKAJRW/'
      }
    ]

    const onPressOpenLink = useCallback(
      async value => {
        console.log(JSON.stringify(value))
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(value)
        if (supported) {
          // Opening the link with some app, if the URL scheme is "http" the web link should be opened
          // by some browser in the mobile
          await Linking.openURL(value)
        } else {
          Alert.alert(`Don't know how to open this URL: ${url}`)
        }
      },
      [url]
    )

    return articles.map((item, i) => {
      return (
        <View {...props} key={i}>
          <Card style={styles.card} status='info'>
            <Text category='h5' status='info'>
              {item.title}
            </Text>
            <Pressable onPress={() => onPressOpenLink(item.url)}>
              <Text category='c1'>{item.subtitle}</Text>
            </Pressable>
          </Card>
        </View>
      )
    })
  }

  return (
    <>
      <View style={styles.subtext}>
        <Text style={styles.text} category='h5' status='primary'>
          Explore
        </Text>
      </View>
      {props?.fromScreen && (
        <View style={styles.caption}>
          <Text category='p1'>
            Here are just a few of the ways physical activity can help you feel
            better, look better and live better. Because, why not?
          </Text>
        </View>
      )}

      <Layout style={styles.topContainer} level='1'>
        <ArticleSection />
      </Layout>
    </>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    margin: '0%',
    padding: '0%'
  },
  card: {
    marginBottom: 15,
    paddingTop: 10
  },
  caption: {
    marginBottom: 20
  },
  subtext: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },
  imageBg: {
    padding: 0,
    opacity: '10%'
  }
})

export default ExploreSection
