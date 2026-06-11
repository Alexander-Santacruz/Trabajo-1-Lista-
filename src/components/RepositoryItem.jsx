import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingVertical: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 4,
    marginRight: 12,
  },
  headerContent: {
    flex: 1,
    justifyContent: 'center',
  },
  fullName: {
    marginBottom: 5,
  },
  description: {
    marginBottom: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statLabel: {
    marginTop: 5,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={{ uri: item.ownerAvatarUrl }}
          style={styles.avatar}
        />
        <View style={styles.headerContent}>
          <Text style={styles.fullName} fontSize="subheading" fontWeight="bold">
            {item.fullName}
          </Text>
          <Text color="textSecondary" fontSize="body">
            {item.language}
          </Text>
        </View>
      </View>

      <Text style={styles.description} color="textSecondary">
        {item.description}
      </Text>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text fontWeight="bold">{item.stargazersCount}</Text>
          <Text style={styles.statLabel} color="textSecondary" fontSize="body">
            Stars
          </Text>
        </View>

        <View style={styles.statItem}>
          <Text fontWeight="bold">{item.forksCount}</Text>
          <Text style={styles.statLabel} color="textSecondary" fontSize="body">
            Forks
          </Text>
        </View>

        <View style={styles.statItem}>
          <Text fontWeight="bold">{item.ratingAverage}</Text>
          <Text style={styles.statLabel} color="textSecondary" fontSize="body">
            Rating
          </Text>
        </View>

        <View style={styles.statItem}>
          <Text fontWeight="bold">{item.reviewCount}</Text>
          <Text style={styles.statLabel} color="textSecondary" fontSize="body">
            Reviews
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
