"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Card from "./Card";
import data from "../data/data.json";
import { DragDropContext } from "react-beautiful-dnd";
import { useState } from "react";
import { Droppable } from "react-beautiful-dnd";

export default function Board() {
	const [tabs, setTabs] = useState(data[0].items);
	const [onProgressTabs, setOnProgressTabs] = useState(data[1].items);
	const [completedTabs, setCompletedTabs] = useState(data[2].items);

	const onDragEnd = (result) => {
		const source = result.source;
		const destination = result.destination;
		const sourceLoc = source.droppableId;
		const destLoc = destination.droppableId;
		if (!result.destination || sourceLoc === destLoc) return;

		let movedComponent;
		let copyTabs = tabs,
			copyOnProgressTabs = onProgressTabs,
			copyCompletedTabs = completedTabs;

		if (destLoc === "On Progress" && sourceLoc === "To Do") {
			movedComponent = copyTabs[source.index];
			copyTabs.splice(source.index, 1);
			copyOnProgressTabs.splice(destination.index, 0, movedComponent);
			setTabs(copyTabs);
			setOnProgressTabs(copyOnProgressTabs);
		}
		if (destLoc === "On Progress" && sourceLoc === "Done") {
			movedComponent = copyCompletedTabs[source.index];
			copyCompletedTabs.splice(source.index, 1);
			copyOnProgressTabs.splice(destination.index, 0, movedComponent);
			setCompletedTabs(copyCompletedTabs);
			setOnProgressTabs(copyOnProgressTabs);
		}
		if (destLoc === "Done" && sourceLoc === "To Do") {
			movedComponent = copyTabs[source.index];
			copyTabs.splice(source.index, 1);
			copyCompletedTabs.splice(destination.index, 0, movedComponent);
			setTabs(copyTabs);
			setCompletedTabs(copyCompletedTabs);
		}
		if (destLoc === "Done" && sourceLoc === "On Progress") {
			movedComponent = copyOnProgressTabs[source.index];
			copyOnProgressTabs.splice(source.index, 1);
			copyCompletedTabs.splice(destination.index, 0, movedComponent);
			setOnProgressTabs(copyOnProgressTabs);
			setCompletedTabs(copyCompletedTabs);
		}
		if (destLoc === "To Do" && sourceLoc === "On Progress") {
			movedComponent = copyOnProgressTabs[source.index];
			copyOnProgressTabs.splice(source.index, 1);
			copyTabs.splice(destination.index, 0, movedComponent);
			setOnProgressTabs(copyOnProgressTabs);
			setTabs(copyTabs);
		}
		if (destLoc === "To Do" && sourceLoc === "Done") {
			movedComponent = copyCompletedTabs[source.index];
			copyCompletedTabs.splice(source.index, 1);
			copyTabs.splice(destination.index, 0, movedComponent);
			setCompletedTabs(copyCompletedTabs);
			setTabs(copyTabs);
		}
	};
	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Box sx={{ display: "flex", my: 6, mx: 4, gap: 2 }}>
				<Droppable droppableId={"To Do"}>
					{(provided) => {
						return (
							<Box
								sx={{
									backgroundColor: "#F5F5F5",
									width: "33%",
									p: 2,
									borderRadius: 2,
								}}
								ref={provided.innerRef}
								{...provided.droppableProps}
							>
								<Box
									sx={{
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
										borderBottom: 3,
										borderColor: "#5030E5",
										pb: 1,
									}}
								>
									<Box
										sx={{
											display: "flex",
											alignItems: "center",
											position: "relative",
											gap: 2,
										}}
									>
										<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
											<Image
												src={"assets/icons/doneEllipse.svg"}
												width={10}
												height={10}
												alt="doneEllipse"
											/>
											<Typography sx={{ fontSize: 16, fontWeight: 600 }}>
												To Do
											</Typography>
										</Box>
										<Image
											src="assets/icons/length.svg"
											width={20}
											height={20}
											alt="length"
										/>
										<Typography
											sx={{
												position: "absolute",
												right: 6,
												color: "#625F6D",
												fontSize: 12,
											}}
										>
											{tabs.length}
										</Typography>
									</Box>
									{tabs.name === "To Do" && (
										<Image
											src="assets/icons/add-square-blue.svg"
											width={20}
											height={20}
											alt="add-square-blue"
										/>
									)}
								</Box>
								<Box sx={{ my: 2 }}>
									{tabs.map((item, index) => (
										<Box sx={{ my: 1 }}>
											<Card
												setTabs={setTabs}
												setOnProgressTabs={setOnProgressTabs}
												setCompletedTabs={setCompletedTabs}
												index={index}
												item={item}
											/>
										</Box>
									))}
								</Box>
								{provided.placeholder}
							</Box>
						);
					}}
				</Droppable>
				<Droppable droppableId="On Progress">
					{(provided) => {
						return (
							<Box
								sx={{
									backgroundColor: "#F5F5F5",
									width: "33%",
									p: 2,
									borderRadius: 2,
								}}
								ref={provided.innerRef}
								{...provided.droppableProps}
							>
								<Box
									sx={{
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
										borderBottom: 3,
										borderColor: "#FFA500",
										pb: 1,
									}}
								>
									<Box
										sx={{
											display: "flex",
											alignItems: "center",
											position: "relative",
											gap: 2,
										}}
									>
										<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
											<Image
												src="assets/icons/ellipse9.svg"
												width={10}
												height={10}
												alt="ellipse9"
											/>
											<Typography sx={{ fontSize: 16, fontWeight: 600 }}>
												On Progress
											</Typography>
										</Box>
										<Image
											src="assets/icons/length.svg"
											width={20}
											height={20}
											alt="length"
										/>
										<Typography
											sx={{
												position: "absolute",
												right: 6,
												color: "#625F6D",
												fontSize: 12,
											}}
										>
											{onProgressTabs.length}
										</Typography>
									</Box>
									<Image
										src="assets/icons/add-square-blue.svg"
										width={20}
										height={20}
										alt="add-square-blue"
									/>
								</Box>
								<Box sx={{ my: 2 }}>
									{onProgressTabs.map((item, index) => (
										<Box sx={{ my: 1 }}>
											<Card
												setTabs={setTabs}
												setOnProgressTabs={setOnProgressTabs}
												setCompletedTabs={setCompletedTabs}
												index={index}
												item={item}
											/>
										</Box>
									))}
								</Box>
								{provided.placeholder}
							</Box>
						);
					}}
				</Droppable>
				<Droppable droppableId="Done">
					{(provided) => {
						return (
							<Box
								sx={{
									backgroundColor: "#F5F5F5",
									width: "33%",
									p: 2,
									borderRadius: 2,
								}}
								ref={provided.innerRef}
								{...provided.droppableProps}
							>
								<Box
									sx={{
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
										borderBottom: 3,
										borderColor: "#8BC48A",
										pb: 1,
									}}
								>
									<Box
										sx={{
											display: "flex",
											alignItems: "center",
											position: "relative",
											gap: 2,
										}}
									>
										<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
											<Image
												src="assets/icons/ellipse11.svg"
												width={10}
												height={10}
												alt="ecllipse11"
											/>
											<Typography sx={{ fontSize: 16, fontWeight: 600 }}>
												Done
											</Typography>
										</Box>
										<Image
											src="assets/icons/length.svg"
											width={20}
											height={20}
											alt="length"
										/>
										<Typography
											sx={{
												position: "absolute",
												right: 6,
												color: "#625F6D",
												fontSize: 12,
											}}
										>
											{completedTabs.length}
										</Typography>
									</Box>
									<Image
										src="assets/icons/add-square-blue.svg"
										width={20}
										height={20}
										alt="add-square-blue"
									/>
								</Box>
								<Box sx={{ my: 2 }}>
									{completedTabs.map((item, index) => (
										<Box sx={{ my: 1 }}>
											<Card
												setTabs={setTabs}
												setOnProgressTabs={setOnProgressTabs}
												setCompletedTabs={setCompletedTabs}
												index={index}
												item={item}
											/>
										</Box>
									))}
								</Box>
								{provided.placeholder}
							</Box>
						);
					}}
				</Droppable>
				{/* {tabs.map((item, index) => (
					<Droppable droppableId={item.name}>
						{(provided) => {
							return (
								<Box
									sx={{
										backgroundColor: "#F5F5F5",
										width: "33%",
										p: 2,
										borderRadius: 2,
									}}
									ref={provided.innerRef}
									{...provided.droppableProps}
									key={index}
								>
									<Box
										sx={{
											display: "flex",
											justifyContent: "space-between",
											alignItems: "center",
											borderBottom: 3,
											borderColor:
												item.name === "To Do"
													? "#5030E5"
													: item.name === "On Progress"
													? "#FFA500"
													: "#8BC48A",
											pb: 1,
										}}
									>
										<Box
											sx={{
												display: "flex",
												alignItems: "center",
												position: "relative",
												gap: 2,
											}}
										>
											<Box
												sx={{ display: "flex", alignItems: "center", gap: 1 }}
											>
												<Image
													src={
														item.name === "To Do"
															? "assets/icons/doneEllipse.svg"
															: item.name === "On Progress"
															? "assets/icons/ellipse9.svg"
															: "assets/icons/ellipse11.svg"
													}
													width={10}
													height={10}
												/>
												<Typography sx={{ fontSize: 16, fontWeight: 600 }}>
													{item.name}
												</Typography>
											</Box>
											<Image
												src="assets/icons/length.svg"
												width={20}
												height={20}
											/>
											<Typography
												sx={{
													position: "absolute",
													right: 6,
													color: "#625F6D",
													fontSize: 12,
												}}
											>
												{item.items.length}
											</Typography>
										</Box>
										{item.name === "To Do" && (
											<Image
												src="assets/icons/add-square-blue.svg"
												width={20}
												height={20}
											/>
										)}
									</Box>
									<Box sx={{ my: 2 }}>
										{item.items.map((item, index) => (
											<Box sx={{ my: 1 }}>
												<Card
													setTabs={setTabs}
													onProgressTabs={onProgressTabs}
													setOnProgressTabs={setOnProgressTabs}
													completedTabs={completedTabs}
													setCompletedTabs={setCompletedTabs}
													index={index}
													item={item}
												/>
											</Box>
										))}
									</Box>
								</Box>
							);
						}}
					</Droppable>
				))} */}
			</Box>
		</DragDropContext>
	);
}
