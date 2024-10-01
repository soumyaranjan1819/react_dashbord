import { Card, CardContent, Typography, Box } from "@mui/material";
import ArrowRise from "../assets/icons/ArrowRise.svg";
import ArrowFall from "../assets/icons/ArrowFall.svg";
import { useColorTheme } from '../context/ThemeContext';

interface CardItemProps {
  title: string;
  value: string | number;
  growth: string;
  backgroundColor: string;
  backgroundColorDark: string;
  onClick?: () => void; 
}

const CardItem: React.FC<CardItemProps> = ({
  title,
  value,
  growth,
  backgroundColor,
  backgroundColorDark,
  onClick,
}) => {
  const growthValue = parseFloat(growth);
  const isPositiveGrowth = growthValue > 0;
  const growthColor = isPositiveGrowth ? "green" : "red";
  const GrowthIcon = isPositiveGrowth ? ArrowRise : ArrowFall;
  const { theme } = useColorTheme();

  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        maxWidth: "14.02vw",
        height: "13.2vh",
        borderRadius: "16px",
        backgroundColor: theme === "dark" ? backgroundColorDark : backgroundColor,
        boxShadow: "none",
        cursor: onClick ? "pointer" : "default", 
        transition: "transform 0.2s", 
        "&:hover": {
          transform: onClick ? "scale(1.05)" : "none", 
        },
      }}
    >
      <CardContent sx={{ padding: "16px" }}>
        <Typography
          variant="body2"
          sx={{
            color: "rgba(28, 28, 28, 1)",
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "16px",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "600", fontSize: "24px" }}>
            {value}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <Typography variant="body2" sx={{ color: growthColor }}>
              {growth}
            </Typography>
            <img
              src={GrowthIcon}
              alt="Growth icon"
              style={{ width: "16px", height: "16px" }}
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardItem;
