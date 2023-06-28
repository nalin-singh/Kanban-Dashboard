import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Draggable } from "react-beautiful-dnd";

export default function Card({ item, index }) {
	return (
		<Draggable draggableId={item.id.toString()} index={index}>
			{(provided) => {
				return (
					<Box
						sx={{
							backgroundColor: "white",
							p: { md: 2, sm: 1 },
							py: 2,
							borderRadius: 4,
						}}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						ref={provided.innerRef}
						key={index}
					>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
							}}
						>
							<Typography
								sx={{
									color: "#D58D49",
									backgroundColor: "#F9EEE3",
									py: 0.5,
									px: 1,
									borderRadius: 2,
								}}
							>
								{item.priority}
							</Typography>
							<Image
								src="assets/icons/more.svg"
								width={15}
								height={15}
								alt="more"
							/>
						</Box>
						<Box sx={{ display: "flex", justifyContent: "center" }}>
							{item.images &&
								item.images.length > 0 &&
								item.images.map((image) => (
									<Box>
										<Image src={image} height={200} width={200} alt={image} />
									</Box>
								))}
						</Box>
						<Box sx={{ my: 1 }}>
							<Typography sx={{ fontSize: 18, fontWeight: 600 }}>
								{item.title}
							</Typography>
							<Typography
								sx={{ fontSize: 12, fontWeight: 400, color: "#787486" }}
							>
								{item.desc}
							</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
							}}
						>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
								}}
							>
								{item.assignees.map((assignee) => (
									<Image
										src={assignee}
										width={24}
										height={24}
										style={{ marginLeft: -6 }}
										alt={assignee}
									/>
								))}
							</Box>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: { md: 2, sm: 0 },
								}}
							>
								<Box sx={{ display: "flex", alignItems: "center" }}>
									<Image
										src="assets/icons/messagesIcon.svg"
										width={16}
										height={16}
										alt="messagesIcon"
									/>
									<Typography
										sx={{ fontSize: 12, fontWeight: 500, color: "#787486" }}
									>
										{item.comments} Comments
									</Typography>
								</Box>
								<Box sx={{ display: "flex" }}>
									<Image
										src="assets/icons/folder-2.svg"
										width={16}
										height={16}
										alt="messagesIcon"
									/>
									<Typography
										sx={{ fontSize: 12, fontWeight: 500, color: "#787486" }}
									>
										{item.attachment} files
									</Typography>
								</Box>
							</Box>
						</Box>
					</Box>
				);
			}}
		</Draggable>
	);
}
