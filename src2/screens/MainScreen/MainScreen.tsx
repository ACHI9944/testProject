import React, {useCallback} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {useGetUsers} from '../../services/users';
import Loading from '../../components/Loading/Loading';
import ErrorComponent from '../../components/Error/Error';
import User, {ITEM_HEIGHT} from '../../components/User/User';
import {RenderItem} from './types';
import {styles} from './styles';

const MainScreen = () => {
  const {loading, isError, data} = useGetUsers();

  const renderItem: RenderItem = useCallback(
    ({item}) => <User item={item} />,
    [],
  );

  if (loading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorComponent />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        removeClippedSubviews={true}
        keyExtractor={item => String(item.id)}
        getItemLayout={(_, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
          index,
        })}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </SafeAreaView>
  );
};

export default MainScreen;
