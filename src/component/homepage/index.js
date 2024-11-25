import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CarCard = ({ title, description, price, discount }) => {
  return (
    <View style={styles.carCard}>
      <View style={styles.carInfo}>
        <Text style={styles.carTitle}>{title}</Text>
        <Text style={styles.carDescription}>{description}</Text>
        <Text style={styles.carPrice}>₱ {price} - per order</Text>
        <Text style={styles.carDiscount}>{discount}</Text>
        <TouchableOpacity style={styles.rentButton}>
          <Text style={styles.rentButtonText}>Order Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const HomePage = () => {
  const hotDeals = [
    {
      id: '1',
      title: 'Cappuccino',
      description: 'Espresso with Steamed Milk',
      price: '200.00',
      discount: '15% Off',
    },
    {
      id: '2',
      title: 'Espresso',
      description: 'Strong and Bold Coffee - Hot coffee',
      price: '120.00',
      discount: '10% Off',
    },
    {
      id: '3',
      title: 'Flat White',
      description: 'Espresso with Steamed Milk Foam',
      price: '220.00',
      discount: '20% Off',
    },
    {
      id: '4',
      title: 'Frappe',
      description: 'Blended Ice Coffee - Cold Coffee',
      price: '180.00',
      discount: '25% Off',
    },
    {
      id: '5',
      title: 'Caramel Macchiato',
      description: 'Sweet Espresso with Caramel Syrup',
      price: '250.00',
      discount: '18% Off',
    },
    {
      id: '6',
      title: 'Iced Mocha',
      description: 'Chocolate and Coffee Blend with Ice',
      price: '230.00',
      discount: '12% Off',
    },
    {
      id: '7',
      title: 'Nitro Cold Brew',
      description: 'Cold Brew Coffee Infused with Nitrogen',
      price: '280.00',
      discount: '30% Off',
    },
    {
      id: '8',
      title: 'Affogato',
      description: 'Espresso Over Vanilla Ice Cream',
      price: '270.00',
      discount: '20% Off',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        
        
        <View style={styles.hotPicksContainer}>
          <Text style={styles.sectionTitle}>Hot Picks</Text>
          <View style={styles.cardGrid}>
            {hotDeals.slice(0, 4).map(deal => (
              <CarCard
                key={deal.id}
                title={deal.title}
                description={deal.description}
                price={deal.price}
                discount={deal.discount}
              />
            ))}
          </View>
        </View>

        
        <View style={styles.servicesContainer}>
          <Text style={styles.sectionTitle}>Our Services</Text>
          <View style={styles.servicesRow}>
            <TouchableOpacity style={styles.serviceItem}>
              <Text style={styles.serviceText}>Hot Coffee</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceItem}>
              <Text style={styles.serviceText}>Cold Coffee</Text>
            </TouchableOpacity>
          </View>
        </View>

        
        <View style={styles.hotDealsContainer}>
          <Text style={styles.sectionTitle}>Hot Deals</Text>
          <View style={styles.cardGrid}>
            {hotDeals.map(deal => (
              <CarCard
                key={deal.id}
                title={deal.title}
                description={deal.description}
                price={deal.price}
                discount={deal.discount}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#D7CCC8' },
  contentContainer: { paddingHorizontal: 20, paddingBottom: 20 },

  hotPicksContainer: { marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#3E2723' },
  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingTop: 5,
  },

  offerContainer: {
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    width: '100%',
    backgroundColor: '#C5A8A1',
  },

  servicesContainer: { marginBottom: 20 },
  servicesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  serviceItem: {
    backgroundColor: '#BCAAA4',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 5,
    minWidth: '40%',
    maxWidth: '48%',
    elevation: 2,
    shadowColor: '#3E2723',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  serviceText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3E2723',
    textAlign: 'center',
  },

  hotDealsContainer: { paddingVertical: 10 },
  carCard: {
    backgroundColor: '#FFF3E0',
    borderRadius: 10,
    width: '48%',
    marginTop: 10,
    overflow: 'hidden',
    elevation: 5,
    paddingBottom: 5,
    paddingTop: 10,
  },

  carInfo: { padding: 10 },
  carTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 5, color: '#3E2723' },
  carDescription: { fontSize: 12, color: '#6c6c6c', marginBottom: 5 },

  carPrice: { fontSize: 14, fontWeight: 'bold', marginBottom: 5 },

  carDiscount: {
    fontSize: 12,
    color: '#fff',
    backgroundColor: '#8D6E63',
    padding: 3,
    borderRadius: 3,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  rentButton: {
    paddingVertical: 8,
    backgroundColor: '#3E2723',
    borderRadius: 5,
    alignItems: 'center',
  },
  rentButtonText: { color: '#fff', fontSize: 14 },
});

export default HomePage;
