import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const useWorkspaces = ({ apps }) => {
  const getWorkspaces = () => {
    return JSON.parse(sessionStorage.getItem("workspaces")) || [];
  };
  const initialWorkspaces =
    JSON.parse(sessionStorage.getItem("workspaces")) || [];
  const initialSelectedWorkspace =
    initialWorkspaces.find((workspace) => workspace.isSelected)?.id || null;
  const [workspaces, setWorkspaces] = useState(initialWorkspaces);
  const [currentWorkspaceId, setCurrentWorkspaceId] = useState(
    initialSelectedWorkspace
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

    let currentWorkspaces = getWorkspaces();
    let workspaceTemp = currentWorkspaces ? currentWorkspaces : workspaces;
    const updatedWorkspaces = workspaceTemp.map((workspace) => ({
      ...workspace,
      isSelected: workspace.label === label,
    }));

    updateWorkspace(updatedWorkspaces);
    setCurrentWorkspaceId(selectedWorkspace?.id || null);
  };

  const handleMenuSelection = (label, widget) => {

    let currentWorkspaces = getWorkspaces();
    let workspaceTemp = currentWorkspaces ? currentWorkspaces : workspaces;
    const existingWorkspace = workspaceTemp.find(
      (workspace) => workspace.widget === widget
    );
    const updatedWorkspaces = workspaceTemp.map((workspace) => ({
      ...workspace,
      isSelected: false,
    }));

    let newWorkspace = {};
    let newLabel = label;
    let count = 1;

    if (existingWorkspace) {
      const duplicateWorkspaces = workspaceTemp.filter((workspace) =>
        workspace.label.startsWith(label)
      );
      if (duplicateWorkspaces.length > 0) {
        count = duplicateWorkspaces.length + 1;
        newLabel = `${label} (${count - 1})`;
        const uuid = uuidv4();
        newWorkspace = {
          id: uuid,
          widget,
          label: newLabel,
          isSelected: true,
        };
      }
    } else {
      const uuid = uuidv4();
      newWorkspace = {
        id: uuid,
        widget,
        label,
        isSelected: true,
      };
    }

    updateWorkspace([...updatedWorkspaces, newWorkspace]);
    setCurrentWorkspaceId(newWorkspace.id);
  };

  const handleCloseWorkspace = (label) => {
    const updatedWorkspaces = workspaces.filter(
      (workspace) => workspace.label !== label
    );

    if (updatedWorkspaces.length === 0) {
      updateWorkspace(updatedWorkspaces);
      setCurrentWorkspaceId(null);
      return;
    }

    if (
      workspaces.find(
        (workspace) => workspace.label === label && workspace.isSelected
      )
    ) {
      const selectedIndex = workspaces.findIndex(
        (workspace) => workspace.label === label
      );
      const newSelectedIndex = Math.max(selectedIndex - 1, 0);
      const newSelectedWorkspace = updatedWorkspaces[newSelectedIndex];

      if (newSelectedWorkspace) {
        updatedWorkspaces[newSelectedIndex].isSelected = true;
        setCurrentWorkspaceId(newSelectedWorkspace.id);
        updateWorkspace(updatedWorkspaces);
      }
    } else {
      updateWorkspace(updatedWorkspaces);
    }
  };

  return {
    workspaces,
    currentWorkspaceId,
    updateWorkspace,
    handleWorkspaceSelection,
    handleMenuSelection,
    handleCloseWorkspace,
  };
};
