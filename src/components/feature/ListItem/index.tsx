import * as S from "./style";

interface ListItemProps {
  title: string;
  category: string;
  date: string;
  status?: "unconfirmed" | "processing" | "completed" | "confirmed";
  statusText?: string;
  statusColor?: string;
  onClick?: () => void;
}

const ListItem = ({
  title,
  category,
  date,
  status,
  statusText,
  statusColor,
  onClick,
}: ListItemProps) => {
  return (
    <S.ItemContainer onClick={onClick}>
      <S.ItemHeader>
        <S.ItemCategory>{category}</S.ItemCategory>
        {statusText && (
          <S.ItemStatus $statusColor={statusColor}>{statusText}</S.ItemStatus>
        )}
        {!statusText && <S.ItemDate>{date}</S.ItemDate>}
      </S.ItemHeader>
      <S.ItemContent>
        <S.ItemTitle>{title}</S.ItemTitle>
        {statusText && <S.ItemDate>{date}</S.ItemDate>}
      </S.ItemContent>
    </S.ItemContainer>
  );
};

export default ListItem;
