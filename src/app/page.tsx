{INDUSTRIES.map((ind, i) => (
              <Reveal key={ind.id} delay={i * 0.04} className="bg-surface">
                <div className="flex h-full flex-col justify-between p-9">
                  <div>
                    <h3 className="font-display text-lg font-medium text-ink">
                      {ind.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-mute">
                      {ind.description}
                    </p>
                  </div>
                  <div className="mt-10 flex items-baseline gap-2">
                    <span className="font-display text-2xl font-semibold text-teal">
                      {ind.stat}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-faint">
                      {ind.statLabel}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
