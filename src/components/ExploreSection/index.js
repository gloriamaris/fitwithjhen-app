import { Card, Layout, Text } from '@ui-kitten/components'
import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { ImageBackground } from 'react-native'

const ExploreSection = props => {

  const ArticleSection = (props) => {
    const articles = [
      {
        id: 1,
        title: 'Stretching and Mobility Routines',
        subtitle: 'to improve flexibility and function'
      },
      {
        id: 2,
        title: '10-min stretching at home',
        subtitle: 'to release tension and relax'
      },
      {
        id: 3,
        title: '10-min No Jump cardio',
        subtitle: 'joint-friendly exercises for you'
      },
      {
        id: 4,
        title: '15-min High Intensity Interval workout',
        subtitle: 'feel the burn with just fifteen minutes'
      },
      {
        id: 5,
        title: 'Shaina Magnanao Ceniza',
        subtitle: 'feel the burn with just fifteen minutes'
      },
      {
        id: 6,
        title: 'John Edward Ruyeras Labor',
        subtitle: 'feel the burn with just fifteen minutes'
      }

    ]

    const source = { uri: 'https://images.summitmedia-digital.com/preview/images/articles/2016/04/18/belle/nm.jpg' }

    return articles.map((item, i) => {
      return (
        <View {...props} key={i}>
          <TouchableOpacity>
                <Card style={styles.card}>
                    <Text category='h6' status='info'>{item.title}</Text>
                    <Text category='s1'>{item.subtitle}</Text>
                </Card>
          </TouchableOpacity>
        </View>
      )
    })
  }

  return (
    <>
      <View style={styles.subtext}>
        <Text style={styles.text} category='h5' status='primary'>Explore</Text>
      </View>
      {
        props?.fromScreen &&
        <View style={styles.caption}>
          <Text category='p1'>
            Here are just a few of the ways physical activity can help you feel better, look better and live better. Because, why not?
          </Text>
        </View>
      }

      <Layout style={styles.topContainer} level='1'>
        <ArticleSection />
      </Layout>
    </>
  )
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
    padding: 0,
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
