import Image from "next/image"

export function SystemArchitect() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">
              Why Uniqinvent
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-foreground">
              A System Architect
            </h2>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8">

            {/* CARD 1 */}
            <div className="group relative rounded-xl p-[1px] transition-all duration-300">

              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300
                bg-gradient-to-r from-primary/40 via-primary/10 to-transparent blur-sm" />

              <div className="relative rounded-xl bg-card/80 backdrop-blur-md p-6 transition-all duration-300
                group-hover:bg-card/90">

                <div className="absolute left-0 top-4 bottom-4 w-[2px] bg-primary opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full" />

                <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">
                  Why Uniqinvent
                </p>

                <h3 className="text-2xl md:text-3xl font-light text-foreground mb-4">
                  <span className="group-hover:text-primary transition-colors">
                    We architect systems
                  </span>{" "}
                  that outlast trends.
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  Most companies offer components. UniqInvent designs the connective tissue — the logic that
                  makes energy, material, and mobility work as one.
                </p>

              </div>
            </div>

            {/* CARD 2 */}
            <div className="group relative rounded-xl p-[1px] transition-all duration-300">

              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300
                bg-gradient-to-r from-primary/40 via-primary/10 to-transparent blur-sm" />

              <div className="relative rounded-xl bg-card/80 backdrop-blur-md p-6 transition-all duration-300
                group-hover:bg-card/90">

                <div className="absolute left-0 top-4 bottom-4 w-[2px] bg-primary opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full" />

                <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">
                  Our Approach
                </p>

                <h3 className="text-2xl md:text-3xl font-light text-foreground mb-4">
                  <span className="group-hover:text-primary transition-colors">
                    Circular by design.
                  </span>{" "}
                  Not by marketing.
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  Each sector we work in supports the next: recycled materials fuel clean energy, powering EV
                  infrastructure, which then aids recovery. This is our real operating model.
                </p>

              </div>
            </div>

            {/* CARD 3 */}
            <div className="group relative rounded-xl p-[1px] transition-all duration-300">

              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300
                bg-gradient-to-r from-primary/40 via-primary/10 to-transparent blur-sm" />

              <div className="relative rounded-xl bg-card/80 backdrop-blur-md p-6 transition-all duration-300
                group-hover:bg-card/90">

                <div className="absolute left-0 top-4 bottom-4 w-[2px] bg-primary opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full" />

                <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">
                  Our Horizon
                </p>

                <h3 className="text-2xl md:text-3xl font-light text-foreground mb-4">
                  <span className="group-hover:text-primary transition-colors">
                    Building Systems
                  </span>{" "}
                  for a Sustainable Tomorrow.
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  We design interconnected solutions across energy, materials, and mobility to shape resilient,
                  future-ready ecosystems.
                </p>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}