import { useTranslations } from 'next-intl';
import { memo, useState } from 'react';

import { Modal } from '@components/Modal';
import { Button } from '@components/ui/Button';

import style from '../../style.module.scss';

export const VideoButton = memo(({ handleClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const trButton = useTranslations('ModalVideo');

  const handleVideoButtonClick = () => {
    handleClick();
    setIsModalOpen(true);
  };

  const handleClose = () => setIsModalOpen(false);

  return (
    <>
      <Button title={trButton('btn_title')} styleType="secondary" onClick={handleVideoButtonClick} />

      {isModalOpen && (
        <Modal handleClose={handleClose}>
          <iframe
            title="Video about us"
            src="https://www.youtube.com/embed/6aqQvH162y8"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={style.video_frame}
          />
        </Modal>
      )}
    </>
  );
});
