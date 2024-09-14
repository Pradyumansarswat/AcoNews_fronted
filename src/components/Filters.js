import React from "react";

const countries = [
    { name: "Australia", code: "au" }, { name: "Brazil", code: "br" }, { name: "Canada", code: "ca" },
    { name: "China", code: "cn" }, { name: "Egypt", code: "eg" }, { name: "France", code: "fr" },
    { name: "Germany", code: "de" }, { name: "Greece", code: "gr" }, { name: "Hong Kong", code: "hk" },
    { name: "India", code: "in" }, { name: "Ireland", code: "ie" }, { name: "Israel", code: "il" },
    { name: "Italy", code: "it" }, { name: "Japan", code: "jp" }, { name: "Netherlands", code: "nl" },
    { name: "Norway", code: "no" }, { name: "Pakistan", code: "pk" }, { name: "Peru", code: "pe" },
    { name: "Philippines", code: "ph" }, { name: "Portugal", code: "pt" }, { name: "Romania", code: "ro" },
    { name: "Russian Federation", code: "ru" }, { name: "Singapore", code: "sg" }, { name: "Spain", code: "es" },
    { name: "Sweden", code: "se" }, { name: "Switzerland", code: "ch" }, { name: "Taiwan", code: "tw" },
    { name: "Ukraine", code: "ua" }, { name: "United Kingdom", code: "gb" }, { name: "United States", code: "us" }
];


const languages = [
    { name: "Arabic", code: "ar" }, { name: "Chinese", code: "zh" }, { name: "Dutch", code: "nl" },
    { name: "English", code: "en" }, { name: "French", code: "fr" }, { name: "German", code: "de" },
    { name: "Greek", code: "el" }, { name: "Hebrew", code: "he" }, { name: "Hindi", code: "hi" },
    { name: "Italian", code: "it" }, { name: "Japanese", code: "ja" }, { name: "Malayalam", code: "ml" },
    { name: "Marathi", code: "mr" }, { name: "Norwegian", code: "no" }, { name: "Portuguese", code: "pt" },
    { name: "Romanian", code: "ro" }, { name: "Russian", code: "ru" }, { name: "Spanish", code: "es" },
    { name: "Swedish", code: "sv" }, { name: "Tamil", code: "ta" }, { name: "Telugu", code: "te" },
    { name: "Ukrainian", code: "uk" }
];


const categories = ["General", "Business", "Entertainment", "Health", "Science", "Sports", "Technology"];

const Filters = ({ setQuery, setCountry, setLanguage, setCategory, handleSearch }) => {
    return (
        <div className="filters">
            <input
                type="text"
                placeholder="Search news..."
                onChange={(e) => setQuery(e.target.value)}
            />
            <select onChange={(e) => setCountry(e.target.value)}>
                <option value="">Select Country</option>
                {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                        {country.name}
                    </option>
                ))}
            </select>
            <select onChange={(e) => setLanguage(e.target.value)}>
                <option value="">Select Language</option>
                {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                        {lang.name}
                    </option>
                ))}
            </select>
            <select onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select Category</option>
                {categories.map((category) => (
                    <option key={category} value={category.toLowerCase()}>
                        {category}
                    </option>
                ))}
            </select>
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default Filters;
