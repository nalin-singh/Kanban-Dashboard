"use client";
import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";

import Image from "next/image";

const Sidebar = () => {
  const [selectedProject, setSelectedProject] = useState("Mobile App");
  const [open, setOpen] = useState(true); // Always open on desktop width

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleBackIconClick = () => {
    handleDrawerClose();
  };

  return (
    <div>
      <Drawer
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
        variant="permanent"
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 4,
            px: 2,
            py: 3,
            borderBottom: 1,
            borderColor: "#DBDBDB",
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <Image src="assets/icons/icon.svg" width={30} height={30} />
            <Typography style={{ fontWeight: 600, fontSize: 20 }} noWrap>
              Project M.
            </Typography>
          </Box>
          <Image
            src="assets/icons/backIcon.svg"
            width={30}
            height={30}
            style={{ cursor: "pointer" }}
            onClick={handleBackIconClick}
          />
        </Box>
        <List sx={{ borderBottom: 1, borderColor: "#DBDBDB", mx: 1 }}>
          <ListItem button>
            <ListItemIcon>
              <Image src="assets/icons/homeIcon.svg" width={20} height={20} />
            </ListItemIcon>
            <ListItemText
              sx={{
                ml: -3,
              }}
              primary={
                <Typography
                  sx={{ fontSize: 16, color: "#787486", fontWeight: 500 }}
                >
                  Home
                </Typography>
              }
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Image
                src="assets/icons/messagesIcon.svg"
                width={20}
                height={20}
              />
            </ListItemIcon>
            <ListItemText
              sx={{
                ml: -3,
              }}
              primary={
                <Typography
                  sx={{ fontSize: 16, color: "#787486", fontWeight: 500 }}
                >
                  Messages
                </Typography>
              }
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Image
                src="assets/icons/task-square.svg"
                width={20}
                height={20}
              />
            </ListItemIcon>
            <ListItemText
              sx={{
                ml: -3,
              }}
              primary={
                <Typography
                  sx={{ fontSize: 16, color: "#787486", fontWeight: 500 }}
                >
                  Tasks
                </Typography>
              }
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Image
                src="assets/icons/profile-2user.svg"
                width={20}
                height={20}
              />
            </ListItemIcon>
            <ListItemText
              sx={{
                ml: -3,
              }}
              primary={
                <Typography
                  sx={{ fontSize: 16, color: "#787486", fontWeight: 500 }}
                >
                  Members
                </Typography>
              }
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Image src="assets/icons/setting-2.svg" width={20} height={20} />
            </ListItemIcon>
            <ListItemText
              sx={{
                ml: -3,
              }}
              primary={
                <Typography
                  sx={{ fontSize: 16, color: "#787486", fontWeight: 500 }}
                >
                  Settings
                </Typography>
              }
            />
          </ListItem>
        </List>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 2,
            pt: 4,
            pb: 2,
          }}
        >
          <Typography
            sx={{ fontSize: "12px", fontWeight: 700, color: "#787486" }}
          >
            MY PROJECTS
          </Typography>
          <Image src="assets/icons/add-square.svg" width={15} height={15} />
        </Box>
        <List sx={{ mx: 1 }}>
          <ListItem
            button
            onClick={() => setSelectedProject("Mobile App")}
            sx={{
              backgroundColor:
                selectedProject === "Mobile App" ? "#5030E514" : "white",
              borderRadius: 2,
              position: "relative",
            }}
          >
            <ListItemIcon>
              <Image src="assets/icons/ellipse8.svg" width={8} height={8} />
            </ListItemIcon>
            <ListItemText
              sx={{
                ml: -4,
              }}
              primary={
                <Typography
                  sx={{
                    fontSize: 16,
                    color:
                      selectedProject === "Mobile App" ? "black" : "#787486",
                    fontWeight: selectedProject === "Mobile App" ? 600 : 500,
                  }}
                >
                  Mobile App
                </Typography>
              }
            />
            {selectedProject === "Mobile App" && (
              <ListItemIcon
                sx={{
                  position: "absolute",
                  right: -2,
                }}
              >
                <Image src="assets/icons/more.svg" width={15} height={15} />
              </ListItemIcon>
            )}
          </ListItem>
          <ListItem
            button
            onClick={() => setSelectedProject("Website Redesign")}
            sx={{
              backgroundColor:
                selectedProject === "Website Redesign" ? "#5030E514" : "white",
              borderRadius: 2,
              position: "relative",
            }}
          >
            <ListItemIcon>
              <Image src="assets/icons/ellipse9.svg" width={8} height={8} />
            </ListItemIcon>
            <ListItemText
              sx={{
                ml: -4,
              }}
              primary={
                <Typography
                  sx={{
                    fontSize: 16,
                    color:
                      selectedProject === "Website Redesign"
                        ? "black"
                        : "#787486",
                    fontWeight:
                      selectedProject === "Website Redesign" ? 600 : 500,
                  }}
                >
                  Website Redesign
                </Typography>
              }
            />
            {selectedProject === "Website Redesign" && (
              <ListItemIcon
                sx={{
                  position: "absolute",
                  right: -25,
                }}
              >
                <Image src="assets/icons/more.svg" width={15} height={15} />
              </ListItemIcon>
            )}
          </ListItem>
          <ListItem
            button
            onClick={() => setSelectedProject("Design System")}
            sx={{
              backgroundColor:
                selectedProject === "Design System" ? "#5030E514" : "white",
              borderRadius: 2,
              position: "relative",
            }}
          >
            <ListItemIcon>
              <Image src="assets/icons/eliipse10.svg" width={8} height={8} />
            </ListItemIcon>
            <ListItemText
              sx={{
                ml: -4,
              }}
              primary={
                <Typography
                  sx={{
                    fontSize: 16,
                    color:
                      selectedProject === "Design System" ? "black" : "#787486",
                    fontWeight: selectedProject === "Design System" ? 600 : 500,
                  }}
                >
                  Design System
                </Typography>
              }
            />
            {selectedProject === "Design System" && (
              <ListItemIcon
                sx={{
                  position: "absolute",
                  right: -25,
                }}
              >
                <Image src="assets/icons/more.svg" width={15} height={15} />
              </ListItemIcon>
            )}
          </ListItem>
          <ListItem
            button
            onClick={() => setSelectedProject("Wireframes")}
            sx={{
              backgroundColor:
                selectedProject === "Wireframes" ? "#5030E514" : "white",
              borderRadius: 2,
              position: "relative",
            }}
          >
            <ListItemIcon>
              <Image src="assets/icons/ellipse11.svg" width={8} height={8} />
            </ListItemIcon>
            <ListItemText
              sx={{
                ml: -4,
              }}
              primary={
                <Typography
                  sx={{
                    fontSize: 16,
                    color:
                      selectedProject === "Wireframes" ? "black" : "#787486",
                    fontWeight: selectedProject === "Wireframes" ? 600 : 500,
                  }}
                >
                  Wireframes
                </Typography>
              }
            />
            {selectedProject === "Wireframes" && (
              <ListItemIcon
                sx={{
                  position: "absolute",
                  right: -25,
                }}
              >
                <Image src="assets/icons/more.svg" width={15} height={15} />
              </ListItemIcon>
            )}
          </ListItem>
        </List>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#F5F5F5",
            mx: 2,
            mt: 4,
            p: 2,
            position: "relative",
            borderRadius: 4,
          }}
        >
          <Box
            style={{
              position: "absolute",
              top: -20,
              backgroundColor: "#F5F5F5",
              borderRadius: 25,
              p: 25,
            }}
          >
            <Image src="assets/icons/lamp-on.svg" width={30} height={30} />
          </Box>
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 600,
              color: "black",

              textAlign: "center",
            }}
          >
            Thoughts Time
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 500,
              my: 1,
              color: "#787486",
              textAlign: "center",
              width: 150,
            }}
          >
            We don’t have any notice for you, till then you can share your
            thoughts with your peers.
          </Typography>
          <input
            placeholder="Write a message"
            style={{
              border: "none",
              backgroundColor: "white",
              paddingTop: 10,
              paddingBottom: 10,
              textAlign: "center",
              color: "black",
              outline: "none",
              boxShadow: "none",
              appearance: "none",
              fontSize: "17px",
              fontWeight: 400,
            }}
          />
        </Box>
      </Drawer>
    </div>
  );
};

export default Sidebar;
