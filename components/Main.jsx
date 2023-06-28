"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function Main() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "space-between",
          m: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 46, fontWeight: 600 }}>
            Mobile App
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, ml: 3 }}>
            <Image
              src="assets/icons/arrow-square-up.svg"
              width={30}
              height={30}
            />
            <Image src="assets/icons/link.svg" width={30} height={30} />
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Image
              src="assets/icons/add-square-blue.svg"
              width={18}
              height={18}
            />
            <Typography
              sx={{ color: "#5030E5", fontSize: 16, fontWeight: 500 }}
            >
              Invite
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                position: "relative",
              }}
            >
              <Image src="assets/images/ellipse12.svg" width={38} height={38} />
              <Image
                src="assets/images/ellipse13.svg"
                width={38}
                height={38}
                style={{ marginLeft: -6 }}
              />
              <Image
                src="assets/images/ellipse15.svg"
                width={38}
                height={38}
                style={{ marginLeft: -6 }}
              />
              <Image
                src="assets/images/ellipse14.svg"
                width={38}
                height={38}
                style={{ marginLeft: -6 }}
              />

              <Image
                src="assets/images/ellipse17.svg"
                width={38}
                height={38}
                style={{ marginLeft: -6 }}
              />
              <Typography
                sx={{
                  position: "absolute",
                  right: 10,
                  color: "#D25B68",
                  fontSize: 15,
                  fontWeight: 500,
                }}
              >
                +2
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          justifyContent: "space-between",
          alignItems: "center",
          mx: 4,
        }}
      >
        <Box sx={{ display: "flex", gap: 3 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              border: 1,
              borderColor: "#787486",
              borderRadius: 2,
              p: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Image src="assets/icons/filter.svg" width={16} height={16} />
              <Typography
                sx={{ fontSize: 16, fontWeight: 500, color: "#787486" }}
              >
                Filter
              </Typography>
            </Box>
            <Image
              src="assets/icons/arrow-down-light.svg"
              width={16}
              height={16}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              border: 1,
              borderColor: "#787486",
              borderRadius: 2,
              p: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Image src="assets/icons/calendar.svg" width={16} height={16} />
              <Typography
                sx={{ fontSize: 16, fontWeight: 500, color: "#787486" }}
              >
                Today
              </Typography>
            </Box>
            <Image
              src="assets/icons/arrow-down-light.svg"
              width={16}
              height={16}
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              border: 1,
              borderColor: "#787486",
              borderRadius: 2,
              p: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Image src="assets/icons/share.svg" width={16} height={16} />
              <Typography
                sx={{ fontSize: 16, fontWeight: 500, color: "#787486" }}
              >
                Share
              </Typography>
            </Box>
            <Image
              src="assets/icons/arrow-down-light.svg"
              width={16}
              height={16}
            />
          </Box>
          <Box
            sx={{ width: 1, borderRight: 1, borderColor: "#787486", mx: 2 }}
          />
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Image src="assets/icons/grid1.svg" width={40} height={40} />
            <Image src="assets/icons/grid2.svg" width={30} height={30} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
