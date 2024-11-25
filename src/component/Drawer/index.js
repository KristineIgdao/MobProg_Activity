import { View, Image, Text } from 'react-native' 
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer' 
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useSafeAreaInsets } from 'react-native-safe-area-context' 
import { useRouter } from 'expo-router'

export default function DrawerContent(props) {

    const router = useRouter();
    const year = new Date().getFullYear();  

    const handleLogout = async () => {
        router.replace('/');
    }

    const { top, bottom } = useSafeAreaInsets();

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                scrollEnabled={true}
                contentContainerStyle={{ paddingTop: top }}
            >
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        paddingTop: 20 + top,
                        paddingBottom: 20
                    }}
                > 
                    {/* Avatar Container */}
                    <View style={styles.avatarContainer}>
                        {/* Avatar Image */}
                        <Image 
                            source={require('../../assets/kapee.png')}  // Ensure this path is correct
                            style={styles.avatar} 
                        />
                    </View>
                </View>
                <DrawerItemList {...props} />
                <DrawerItem
                    label="Logout"
                    icon={({ color, size }) => (
                        <MaterialCommunityIcons name='logout' color={color} size={size} />
                    )}
                    labelStyle={{ marginLeft: 10 }}
                    onPress={handleLogout}
                />
            </DrawerContentScrollView>
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingBottom: 20 + bottom
                }}
            >
                <Text>
                    Copyright &copy; {year}. All rights reserved
                </Text>
            </View> 
        </View>
    )
}

const styles = {
  avatarContainer: {
    width: 100,  
    height: 100, 
    backgroundColor: '#EDE8DC',
    borderWidth: 2,
    borderColor: '#654520', 
    borderRadius: 50, 
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginRight: 180,
    marginLeft: 180,
    marginBottom: 30,
    marginTop: 20,
  },
  avatar: {
    width: 100, 
    height: 100, 
    borderRadius: 5,
  },
};
