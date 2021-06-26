import notFound from 'assets/images/404-robot.png';

export default () => (
  <img
    style={{
      objectFit: 'contain',
      height: '-webkit-fill-available',
      padding: '4%',
    }}
    src={notFound}
    alt="404"
  />
);
