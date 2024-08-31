import { RxValue } from "react-icons/rx";
import useCategories from "../../../hooks/useCategories";
import FilterDropDown from "../../../ui/FilterDropDown";

function ProjectsHeader() {
  const { transformCategories } = useCategories();
  return (
    <div className="flex items-center justify-between text-secondary-700 mb-8">
      <h1 className="text-lg font-bold">لیست پروژه ها</h1>
      <div>
        <FilterDropDown
          filterField="category"
          options={[
            {
              value: "ALL",
              label: "دسته بندی (همه)",
            },
            ...transformCategories,
          ]}
        />
      </div>
    </div>
  );
}
export default ProjectsHeader;
