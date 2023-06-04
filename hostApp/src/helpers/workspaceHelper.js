import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const useWorkspaces = ({apps}) => {

  const [workspaces, setWorkspaces] = useState(
    JSON.parse(sessionStorage.getItem("workspaces")) || []
  );

  const updateWorkspace = (updatedWorkspaces) => {
    setWorkspaces(updatedWorkspaces);
    sessionStorage.setItem("workspaces", JSON.stringify(updatedWorkspaces));
  };

  const handleWorkspaceSelection = (label) => {
    const selectedWorkspace = workspaces.find(
      (workspace) => workspace.label === label
    );

    if (selectedWorkspace?.isSelected) {
      return;
    }

    const updatedWorkspaces = workspaces.map((workspace) => ({
      ...workspace,
      isSelected: workspace.label === label,
    }));
    updateWorkspace(updatedWorkspaces);
  };

  const handleMenuSelection = (label, widget) => {
    const existingWorkspace = workspaces.find(
      (workspace) => workspace.widget === widget
    );
    const updatedWorkspaces = workspaces.map((workspace) => ({
      ...workspace,
      isSelected: false,
    }));

    let newWorkspace = {};
    let newLabel = label;
    let count = 1;

    if (existingWorkspace) {
      const duplicateWorkspaces = workspaces.filter((workspace) =>
        workspace.label.startsWith(label)
      );
      if (duplicateWorkspaces.length > 0) {
        count = duplicateWorkspaces.length + 1;
        newLabel = `${label} (${count - 1})`;
        newWorkspace = {
          widget,
          label: newLabel,
          isSelected: true,
        };
      }
    } else {
      newWorkspace = {
        widget,
        label,
        isSelected: true,
      };
    }

    updateWorkspace([...updatedWorkspaces,newWorkspace]);
  };

  const handleCloseWorkspace = (label) => {
    const updatedWorkspaces = workspaces?.filter(
      (workspace) => workspace.label !== label
    );
    if (updatedWorkspaces.length === 0) {
      updateWorkspace(updatedWorkspaces);
      return;
    }
    if (
      workspaces.find(
        (workspace) => workspace.label === label && workspace.isSelected
      )
    ) {
      const selectedIndex = workspaces?.findIndex(
        (workspace) => workspace.label === label
      );
      const newSelectedIndex = Math.max(selectedIndex - 1, 0);
      const newSelectedWorkspace = updatedWorkspaces[newSelectedIndex];

      if (newSelectedWorkspace) {
        updatedWorkspaces[newSelectedIndex].isSelected = true;
        updateWorkspace(updatedWorkspaces);
      }
    }
    updateWorkspace(updatedWorkspaces);
  };

  return {
    workspaces,
    updateWorkspace,
    handleWorkspaceSelection,
    handleMenuSelection,
    handleCloseWorkspace,
  };
};
