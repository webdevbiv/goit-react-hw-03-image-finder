
import {
  Button,
  ImageGallery,
  ImageGalleryItem,
  Loader,
  Modal,
  Searchbar
} from 'components'

export const App = () => {
  return (

    // https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
    <>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        React homework template test
      </div>
      <ImageGallery />
      <ImageGalleryItem />
      <Loader />
      <Modal />
      <Searchbar />
      <Button />
    </>
  );
};
