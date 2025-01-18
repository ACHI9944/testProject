import {Text, View} from 'react-native';
import {useCreatePostsMutation} from '../../services/jsonPlaceholder';
import Input from '../../components/Input';
import {useState} from 'react';
import CustomButton from '../../components/CustomButton';

const CreatePostScreen = () => {
  const [newPost, setNewPost] = useState({title: '', body: ''});
  const [createPost, {isLoading, error}] = useCreatePostsMutation();

  const handleCreatePost = async () => {
    const post = createPost(newPost);
    await post;
    console.log(post);
  };
  return (
    <View style={{alignItems: 'center'}}>
      <Input
        setValue={value => setNewPost(prev => ({...prev, title: value}))}
        keyboardType={'default'}
        placeholder={'Title'}
      />
      <Input
        setValue={value => setNewPost(prev => ({...prev, body: value}))}
        keyboardType={'default'}
        placeholder={'Body'}
      />
      <CustomButton
        text={'Post'}
        onPress={handleCreatePost}
        disabled={
          newPost.title.length === 0 || newPost.body.length === 0 || isLoading
        }
      />
    </View>
  );
};

export default CreatePostScreen;
