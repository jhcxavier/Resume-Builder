import React, { useState } from "react";
import "../../styles/index.scss";
import { Context } from "../store/appContext";
import { SkillCard } from "../component/skillCard";

export const Skills = () => {
	const [skill, setSkill] = useState("");
	const [resume, setResume] = useState(false);
	const [page, setPage] = useState(false);

	const clearFields = () => {
		setSkill("");
		setResume(false);
		setPage(false);
	};

	return (
		<Context.Consumer>
			{({ store, actions }) => {
				return (
					<div className="container">
						<div className="card mt-2 bg-light">
							<div className="card-body">
								<input
									className="m-1"
									size="37"
									type="text"
									placeholder="Skill"
									value={skill}
									onChange={({ target: { value: v } }) => setSkill(v)}
								/>
							</div>
							<div className="card-footer text-muted">
								<input
									className="display-inline-block"
									type="checkbox"
									checked={resume ? "checked" : ""}
									onClick={() => setResume(!resume)}
								/>
								Resume
								<input
									className="ml-4 display-inline-block"
									type="checkbox"
									checked={page ? "checked" : ""}
									onClick={() => setPage(!page)}
								/>
								Page
								<button
									className="btn btn-info float-right"
									onClick={() => {
										//clearFields();
										actions.addSkill(skill, resume, page, store.user.id);
									}}>
									Save
								</button>
							</div>
						</div>
						{store.skills.map((item, index) => {
							return (
								<SkillCard
									key={index}
									skill={item.skill}
									resume={item.resume}
									page={item.page}
									id={item.id}
									//level={item.level}
								/>
							);
						})}
					</div>
				);
			}}
		</Context.Consumer>
	);
};
