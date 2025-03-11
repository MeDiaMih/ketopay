import { FC } from 'react';
import { LoaderContainer, LoaderImage } from './styles';
import { ReactComponent as LoaderSVG } from '../../assets/img/Vector (19).svg';


const Loader: FC = () => {
  return (
    <LoaderContainer>
      <LoaderImage>
        <LoaderSVG />
      </LoaderImage>
    </LoaderContainer>
  );
};

export default Loader;