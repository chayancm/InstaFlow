"use client";
import { Button } from "@/components/ui/button";
import { useMutationDataState } from "@/hooks/use-mutation-data";
import { usePaths } from "@/hooks/user-nav";
import { useQueryAutomations } from "@/hooks/user-queries";
import { cn, getMonth } from "@/lib/utils";
import Link from "next/link";
import { useMemo } from "react";
import CreateAutomation from "../create-automation";
import DeleteAutomation from "../delete-automation";
import GradientButton from "../gradient-button";

type Props = {};

const AutomationList = (props: Props) => {
  const { data } = useQueryAutomations();
  const { latestVariable: latestCreated } = useMutationDataState([
    "create-automation",
  ]);
  const { latestVariable: latestDeleted } = useMutationDataState([
    "delete-automation",
  ]);
  const { pathname } = usePaths();
  const optimisticUiData = useMemo(() => {
    let current = data?.data ?? [];

    // Handle creation
    if (latestCreated?.variables) {
      current = [latestCreated.variables, ...current];
    }

    // Handle deletion
    if (latestDeleted?.variables?.id) {
      current = current.filter((a) => a.id !== latestDeleted.variables.id);
    }

    return { data: current };
  }, [latestCreated, latestDeleted, data]);

  if (data?.status !== 200 || data.data.length <= 0) {
    return (
      <div className="h-[70vh] flex justify-center items-center flex-col gap-y-3">
        <h3 className="text-lg text-gray-400">No Automations </h3>
        <CreateAutomation />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-3">
      {optimisticUiData.data!.map((automation) => (
        <div key={automation.id} className="relative">
          <Link
            href={`${pathname}/${automation.id}`}
            className="bg-[#1D1D1D] hover:opacity-80 transition duration-100 rounded-xl p-5 border-[1px] radial--gradient--automations flex border-[#545454] block"
          >
            <div className="flex flex-col flex-1 items-start">
              <h2 className="text-xl font-semibold">{automation.name}</h2>
              <p className="text-[#9B9CA0] text-sm font-light mb-2">
                This is from the comment
              </p>

              {automation.keywords.length > 0 ? (
                <div className="flex gap-x-2 flex-wrap mt-3">
                  {
                    //@ts-ignore
                    automation.keywords.map((keyword, key) => (
                      <div
                        key={keyword.id}
                        className={cn(
                          "rounded-full px-4 py-1 capitalize",
                          (0 + 1) % 1 == 0 &&
                            "bg-keyword-green/15 border-2 border-keyword-green",
                          (1 + 1) % 2 == 0 &&
                            "bg-keyword-purple/15 border-2 border-keyword-purple",
                          (2 + 1) % 3 == 0 &&
                            "bg-keyword-yellow/15 border-2 border-keyword-yellow",
                          (3 + 1) % 4 == 0 &&
                            "bg-keyword-red/15 border-2 border-keyword-red"
                        )}
                      >
                        {keyword.word}
                      </div>
                    ))
                  }
                </div>
              ) : (
                <div className="rounded-full border-2 mt-3 border-dashed border-white/60 px-3 py-1">
                  <p className="text-sm text-[#bfc0c3]">No Keywords</p>
                </div>
              )}
            </div>
            <div className="flex flex-col justify-between">
              <p className="capitalize text-sm font-light text-[#9B9CA0]">
                {getMonth(automation.createdAt.getUTCMonth() + 1)}{" "}
                {automation.createdAt.getUTCDate() === 1
                  ? `${automation.createdAt.getUTCDate()}st`
                  : automation.createdAt.getUTCDate() === 2
                  ? `${automation.createdAt.getUTCDate()}nd`
                  : automation.createdAt.getUTCDate() === 3
                  ? `${automation.createdAt.getUTCDate()}rd`
                  : `${automation.createdAt.getUTCDate()}th`}{" "}
                {automation.createdAt.getUTCFullYear()}
              </p>

              {automation.listener?.listener === "SMARTAI" ? (
                <GradientButton
                  type="BUTTON"
                  className="w-full bg-background-80 text-white hover:bg-background-80"
                >
                  Smart AI
                </GradientButton>
              ) : (
                <Button className="bg-background-80 hover:bg-background-80 text-white">
                  Standard
                </Button>
              )}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AutomationList;
