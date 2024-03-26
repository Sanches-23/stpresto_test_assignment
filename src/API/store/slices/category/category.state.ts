export type CategoryState = {
    categories: string[];
    // statuses: { getStatus: "Idle" | "Loading" | "Failed" };
};

export const InitialCategoryState: CategoryState = {
    categories: [],
    // statuses: { getStatus: "Idle" },
};