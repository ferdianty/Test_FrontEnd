import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>CARTRIDGE KINGS</Text>
      <View style={styles.rightContainer}>
        <Icon name="search" type="font-awesome" color="#fff" />
        <TouchableOpacity style={styles.cartButton}>
          <Text style={styles.cartText}>CART (1)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FF6600',
    padding: 10,
  },
  logo: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartButton: {
    marginLeft: 10,
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  cartText: {
    color: '#FF6600',
    fontWeight: 'bold',
  },
});

export default Header;
