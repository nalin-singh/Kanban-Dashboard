"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function Navbar() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mx: 4,
        gap: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",

          gap: 2,
          backgroundColor: "#F5F5F5",
          p: 2,

          borderRadius: 2,
          my: 1,
        }}
      >
        <Image
          src="assets/icons/search-normal.svg"
          alt="logo"
          width={20}
          height={20}
        />
        <input
          placeholder="Search for anything..."
          style={{
            border: "none",
            backgroundColor: "#F5F5F5",
            outline: "none",
            boxShadow: "none",
            appearance: "none",
            fontSize: "17px",
            fontWeight: 400,
          }}
        />
      </Box>
      <Box sx={{ display: "flex", gap: 8, alignItems: "center" }}>
        <Box sx={{ display: "flex", gap: 3 }}>
          <Image src="../assets/icons/calendar-2.svg" width={20} height={20} />
          <Image
            src="../assets/icons/message-question.svg"
            width={20}
            height={20}
          />
          <Image
            src="../assets/icons/notification.svg"
            width={20}
            height={20}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Box sx={{ mr: 2, display: { md: "block", sm: "none" } }}>
            <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
              Anima Agrawal
            </Typography>
            <Typography
              sx={{ fontSize: 14, fontWeight: 400, color: "#787486" }}
            >
              U.P. India
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Image src="../assets/images/profile.svg" width={30} height={30} />
            <Image
              src="../assets/icons/arrow-down.svg"
              width={15}
              height={15}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
