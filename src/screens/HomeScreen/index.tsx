import {FlatList, Text, View} from 'react-native';
import {useGetPostsQuery} from '../../services/jsonPlaceholder';
import LoadingOverlay from '../../assets/loadingOverlay';
import SingleItem from '../../components/SingleItem';

const HomeScreen = () => {
  const {data, error, isLoading} = useGetPostsQuery();

  const renderItem = ({item}) => (
    <SingleItem
      userId={item.userId}
      id={item.id}
      title={item.title}
      body={item.body}
    />
  );

  return isLoading ? (
    <LoadingOverlay />
  ) : error ? (
    <View>
      <Text>Error</Text>
    </View>
  ) : (
    <FlatList data={data} renderItem={renderItem} />
  );
};
export default HomeScreen;
