import { Outlet, useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="heading">
        About Page
      </h1>
    </div>
  );
};

export default AboutPage;
