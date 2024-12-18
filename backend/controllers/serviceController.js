import Category from "../models/Category.js";
import Business from "../models/Business.js";

// Fetch all categories
const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find({});
    res.json(categories);
  } catch (error) {
    next(error);
  }
};

// Create a new category
const createCategory = async (req, res, next) => {
  try {
    const { name, icon } = req.body;

    // Validation
    if (!name || !icon) {
      return res.status(400).json({ message: "Name and icon are required" });
    }

    const newCategory = new Category({ name, icon });
    const savedCategory = await newCategory.save();

    res
      .status(201)
      .json({ message: "Category created successfully", data: savedCategory });
  } catch (error) {
    next(error);
  }
};

// Fetch all businesses, with optional category filter
const getBusinesses = async (req, res, next) => {
  try {
    const { category } = req.query; // Optional category filter
    const query = category ? { category } : {};
    const businesses = await Business.find(query).populate("category", "name");
    res.json(businesses);
  } catch (error) {
    next(error);
  }
};

// Fetch a specific business by ID
const getBusinessById = async (req, res, next) => {
  try {
    const business = await Business.findById(req.params.id).populate(
      "category",
      "name"
    );
    if (!business) {
      return res.status(404).json({ message: "Business not found" });
    }
    res.json(business);
  } catch (error) {
    next(error);
  }
};

// Create a new business
const createBusiness = async (req, res, next) => {
  try {
    const { name, category, description, image, provider, location, rating } =
      req.body;

    // Validation
    if (!name || !category || !description || !provider || !location) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newBusiness = new Business({
      name,
      category,
      description,
      image,
      provider,
      location,
      rating,
    });

    const savedBusiness = await newBusiness.save();
    res
      .status(201)
      .json({ message: "Business created successfully", data: savedBusiness });
  } catch (error) {
    next(error);
  }
};

export {
  getCategories,
  createCategory,
  getBusinesses,
  getBusinessById,
  createBusiness,
};
