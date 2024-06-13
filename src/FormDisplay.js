import React, {useState} from "react";

const FormDisplay = ({addColor})=>{
    const [formData, setFormData] = useState({
        name: '',
        value: ''
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(formData);
        setFormData({
          name: '',
          value: ''
        });
      };
      return (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Color name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Color value:</label>
            <input
              type="color"
              name="value"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      );
}

export default FormDisplay