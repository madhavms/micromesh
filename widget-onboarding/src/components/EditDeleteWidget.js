import React from 'react'

const EditDeleteWidget = () => {

  const [widgets, setWidgets] = React.useState([]);
  const [menu, setMenu] = React.useState([]);

  useEffect(() => {
    async function fetchMenu() {
      const response = await fetch("http://localhost:8000/menu");
      const data = await response.json();
      setMenu(data);
    }

    async function fetchApps() {
      const response = await fetch("http://localhost:8000/widgets");
      const data = await response.json();
      setWidgets(data);
    }

    fetchMenu();
    fetchApps();
  }, []);



  return (
    <div>
    
    </div>
  )
}

export default EditDeleteWidget