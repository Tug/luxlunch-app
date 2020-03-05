import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Button, Card, List, Text } from '@ui-kitten/components';
import { ImageOverlay } from './extra/image-overlay';
import { Article } from './extra/data';

const data = [
  Article.howToEatHealthy(),
  Article.whyWorkoutImportant(),
  Article.morningWorkouts(),
];

export default () => {
  const renderItemHeader = (info) => (
    <ImageOverlay
      style={styles.itemHeader}
      source={info.item.image}>
      <Text
        style={styles.itemTitle}
        category='h2'
        status='control'>
        {info.item.title}
      </Text>
      <View style={styles.itemDescriptionContainer}>
        <Text
          style={styles.itemDescription}
          category='s1'
          status='control'>
          {info.item.description}
        </Text>
      </View>
    </ImageOverlay>
  );

  const renderItem = (info) => (
    <Card
      style={styles.item}
      header={() => renderItemHeader(info)}
      onPress={() => {}}>
      <View style={styles.itemFooter}>
        <View style={styles.itemAuthoringContainer}>
          <Text
            category='s2'>
            {info.item.author.fullName}
          </Text>
          <Text
            appearance='hint'
            category='c1'>
            {info.item.date}
          </Text>
        </View>
      </View>
    </Card>
  );

  return (
    <List
      style={styles.list}
      contentContainerStyle={styles.listContent}
      data={data}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  item: {
    marginVertical: 8,
  },
  itemHeader: {
    height: 220,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  itemTitle: {
    zIndex: 1,
  },
  itemDescriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  itemDescription: {
    marginHorizontal: 16,
  },
  itemFooter: {
    flexDirection: 'row',
    marginHorizontal: -8,
  },
  iconButton: {
    paddingHorizontal: 0,
  },
  itemAuthoringContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
});

