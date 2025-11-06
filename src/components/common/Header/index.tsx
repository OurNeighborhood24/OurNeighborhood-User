import { useNavigate } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
import { HeaderContainer, BackButton, Title } from "./style";

interface HeaderProps {
  title: string;
  centered?: boolean;
  onBack?: () => void;
}

const Header = ({ title, centered = false, onBack }: HeaderProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <HeaderContainer>
      <BackButton onClick={handleBack}>
        <BsChevronLeft />
      </BackButton>
      <Title $centered={centered}>{title}</Title>
    </HeaderContainer>
  );
};

export default Header;
