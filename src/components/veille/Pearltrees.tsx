import { Box } from '@mui/material';

const PearltreesEmbed = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '600px', // Ajustez la hauteur selon vos besoins
        border: 'none',
        overflow: 'hidden',
      }}
    >
      <iframe
        src="https://www.pearltrees.com/zarath/veille-technologique-bts-sio/id91128615?embed=2&d=202503221355"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
      ></iframe>
    </Box>
  );
};

export default PearltreesEmbed;